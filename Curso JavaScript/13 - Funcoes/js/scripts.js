// 13 - Funções 

// functio nome() {body}


function primeiraFuncao(){

    console.log("Hello World das funções");
}

primeiraFuncao();

function dizerNome(nome){

    console.log("O nome é: " + nome);

}

nomeDb = "João";

dizerNome("Pedro");
dizerNome("Lucas");
dizerNome(nomeDb);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2,6);

console.log(somaUm);

var somaDois = soma(5,5);

console.log(somaDois);

console.log(soma(7,7))