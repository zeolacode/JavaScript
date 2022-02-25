// carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const { engine } = require ('express-handlebars');
    const bodyParser = require('body-parser')
    const app = express()
    //const mongoose = require('mongoose')
    const admin = require('./routes/admin')
    const path = require('path');
    const mongoose = require("mongoose")
    const session = require("express-session")
    const flash = require("connect-flash");
    const req = require('express/lib/request');
    require("./models/Postagem")
    const Postagem = mongoose.model("postagens")
    require('./models/Categorias')
    const Categoria = mongoose.model("categorias")

// Configurações
    // Sessão
        app.use(session({
            secret: "cursoDeNode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middlewares
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
        })  
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', engine({defaultLayouts: 'main'}))
        app.set('view engine', 'handlebars')

    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://127.0.0.1:27017/blogapp").then(() => {
            console.log("MongoDB Conectado...")
        }).catch((err) => {
            console.log("Houve um erro ao se conectar ao mongoDB: "+ err)
        })

    //
    // Public
        app.use(express.static(path.join(__dirname, "public")))

// Rotas

app.use('/posts', (req, res) => {
    console.log('oi')
    res.send('POS kkkk')
})

app.use('/admin', admin)

app.use('/', (req, res) => {
    Postagem.find().populate("categoria").sort({data: "desc"}).lean().then((postagens) => {
        res.render("index", {postagens: postagens})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno!")
        res.redirect("/404")
    })
    
})

app.get("/categorias", (req, res) => {
    Categoria.find().lean().then((categorias) => {
        res.render("categorias/index", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "houve um erro interno ao listar as categorias")
        res.redirect("/")
    })
})
/*
app.get("/postagem/:slug", (req, res) => {
    Postagem.findOne({slug: req.params.slug}).lean().then((postagem) => {
            if(postagem){
                console.log("oio")
                res.render('postagem/index', {postagem: postagem})
            }else{
                console.log("oio1")
                req.flash("error_msg", "Essa postagem nao existe")
                res.redirect("/")
            }
        })
        .catch(err => {
            console.log("oio2")
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })
})
*/


app.get("/404", (req, res) => {
    res.send("Erro 404!")
})




// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodadndo!")
})