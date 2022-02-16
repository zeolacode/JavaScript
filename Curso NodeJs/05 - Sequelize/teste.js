// Se conectando no banco de dados!!

const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'girafa533', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
});

// criar um model que gere tabelas

// definir model
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//definir model de usuario
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


// gerar model no Mysql - criar tabela
// Postagem.sync({force:true});
// Usuario.sync({force: true})

// Inserir dados no banco
/* Postagem.create({
    titulo: "TESTE 00",
    conteudo: "osa osa osa osa osao ddjkl asklj aklskajs jaksjal"
}) */
Usuario.create({
    nome: "Pedro",
    sobrenome: "zeola",
    idade: 24,
    email: "teste@gmail.com"
})