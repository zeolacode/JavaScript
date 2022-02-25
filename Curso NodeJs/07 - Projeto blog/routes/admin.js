const express = require("express")
const { route } = require("express/lib/application")
const { redirect } = require("express/lib/response")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categorias")
const Categoria = mongoose.model("categorias")
require("../models/Postagem")
const Postagem = mongoose.model("postagens")

router.get('/' , (req, res) => {
    res.render('admin')
})

router.get("/categorias/add", (req, res) => {
    res.render("admin/addcategorias")
})

router.get('/posts', (req, res) => {
    res.send("Pagina de posts")
})

router.get('/categorias', (req, res) => {
    Categoria.find().sort({date: 'desc'}).lean().then((categorias) => {
        res.render("admin/categorias", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        req.redirect("/admin")
    })
})

router.post('/categorias/nova', (req, res) => {
    
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido"})
    }
    
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null)
        erros.push({texto: "Slug inválido"})
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    if(req.body.slug.length < 2){
        erros.push({texto: "Nome da catecoria é muito pequeno!"})
    }

    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros})
    }else{
        new Categoria(novaCategoria).save().then(() => {
            req.flash("success_msg", "Categoria Registrada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
            res.redirect("/admin")
        })
    }
})

router.post("/categorias/edit", (req, res) => {

    Categoria.findOne({_id:req.body.id}).then((categorias) => {

        categorias.nome = req.body.nome
        categorias.slug = req.body.slug

        categorias.save().then(() => {
            req.flash("success_msg", "Categoria editada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err) => {
            req.flash("error_msg", "houve um erro ao editar a categoria")
            res.redirect("admin/categorias")
        })

    }).catch((err) => {
        req.flash("error.msg", "Houve um erro ao editar a categoria!")
        res.redirect('/admin/categorias')
    })

})

router.get('/categorias/edit/:id', (req, res) => {
    Categoria.findOne({_id:req.params.id}).lean().then((categorias) => {
        res.render("admin/editcategorias", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe!")
        res.redirect("/admin/categorias")
    })
    
})

router.post("/categorias/deletar/:id", (req, res) => {
    Categoria.findOneAndDelete({_id: req.params.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria!")
        res.redirect("admin/categorias")
    })
})

router.get("/postagens", (req, res) => {
    
    Postagem.find().lean().populate("categoria").sort({data: "desc"}).then((postagens) => {
        res.render("admin/postagens", {postagens: postagens})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as postagens!")
        res.redirect("/admin")
    })
    

})

router.get("/postagens/add", (req, res) => {
    Categoria.find().lean().then((categorias) => {
        res.render("admin/addpostagens", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário")
        res.redirect("/admin")
    })
})

router.post("/postagens/nova", (req, res) => {

    var erros = []

    if(req.body.categorias == "0"){
        erros.push({texto: "Categoria inválida, registre uma categoria!"})
    }

    if(erros.length > 0){
        res.render("admin/addpostagens", {erros: erros})
    }else{
        const novaPostagem = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug 
        }
        new Postagem(novaPostagem).save().then(() => {
            req.flash("success_msg", "Postagem criada com suceso!")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro durante o salvamento da postagem!")
            res.redirect("/admin/postagens")
        })
    }

})

router.get("/postagens/edit/:id", (req, res) => {
    
    Postagem.findOne({_id: req.params.id}).lean().then((postagem) => {

        Categoria.find().lean().then((categorias) => {
            res.render('admin/editpostagens', {categorias: categorias, postagem: postagem})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar as categorias!")
            res.redirect("/admin/postagens")
        })

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário de edição")
        res.redirect("/admin/postagens")
    })  
})

router.post("/postagem/edit", (req, res) => {

    Postagem.findOne({_id: req.body.id}).then((postagem) => {
        
        postagem.titulo = req.body.titulo
        postagem.slug = req.body.slug
        postagem.descricao = req.body.descricao
        postagem.conteudo = req.body.conteudo
        postagem.categoria = req.body.categoria

        postagem.save().then(() => {
            req.flash("success_msg", "Postagem editada com sucesso!")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            req.flash("error_msg", "Erro interno")
            res.redirect("/admin/postagens")
        })

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao salvar a edição!")
        res.redirect("/admin/postagens")
    })
})

// não é muito recomendado! pela metodo get! 
router.get("/postagens/deletar/:id", (req, res) => {
    Postagem.remove({_id: req.params.id}).lean().then(() => {
        req.flash("success_msg", "Postagem deletada com sucesso!")
        res.redirect("/admin/postagens")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno")
        res.redirect("/admin/postagens")
    })
})

module.exports = router