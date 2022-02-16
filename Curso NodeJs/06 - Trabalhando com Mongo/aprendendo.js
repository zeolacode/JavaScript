const mongoose = require("mongoose")

// Configurando o mongose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1:27017/aprendendo").then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: "+ err)
    })

// Model - Usuários

// Definindo o Model
    const UsuariosSchema = mongoose.Schema({

        nome: {
            type: String, 
            require: true    // se o parametro é obrigatório
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String,
        }
    })

// collection usuarios
    mongoose.model('usuarios', UsuariosSchema)

    const Pessoa = mongoose.model('usuarios')

    new Pessoa ({
        nome: "Guru",
        sobrenome: "TTT",
        email: "vv@gmail.com",
        idade: 20,
        pais: "EUA"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("houve um erro ao registrar o usuário: " + err)
    })

