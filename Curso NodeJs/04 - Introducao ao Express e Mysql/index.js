const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const moment = require('moment')
const Post = require('./models/Post')


/*
//send file template html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu bloggg!");
});

app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2>");
});
*/


// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
        helpers: {
            formatData: (date) => {
                return moment(date).format('DD/MM/YYYY')
            }
        }
    }));

    app.set('view engine', 'handlebars');

    // Body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
// Rotas
        app.get('/', function(req, res){
            Post.findAll().then(function(posts){
                console.log(posts);
                res.render('home', {posts: posts});
            })
        })

        app.get('/cad', function(req, res){
            res.render("formulario")
        })

        app.post('/add', function(req, res){
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Houve um erro: " + erro)
            })
        })

        app.get('/deletar/:id', function(req, res){
            Post.destroy({where: {id: req.params.id}}).then(function() {
                res.send("Postagem deletada com sucesso! ")
            }).catch(function(erro) {
                res.send("Esta postagem não existe! ")
            })
        })



// ultima linha 
app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
});