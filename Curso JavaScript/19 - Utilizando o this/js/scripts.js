console.log(this)

this.alert("Ola")


var teste = 5;
console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: "Pedro",
    idade: 24,
    falar: function(){
        console.log("Ola, tudo bem?");
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    },
};

// this exibe um valor do objeto ou modifica determinado valor 

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("olá " + sdc);