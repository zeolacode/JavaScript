let pessoa = {
    nome: "Pedro",
    idade: 24,
    falar: function(){
        console.log("Ola, tudo bem?");
    },
    soma: function(a,b){
        return a + b;
    },
};

console.log(pessoa.nome);
pessoa.falar();
var soma = pessoa.soma(2,2)
console.log(soma)