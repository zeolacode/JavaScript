// 10 - Comparação de valor e tipo de dado (=== e !==)

// === e !== verifica se o tipo da variável é o mesmo!

var numero = 5;

if(numero === 5){
    console.log("O numero é 5");
};

if(numero == '5'){
    console.log("O numero é 5 (2)");
};

if(numero === '5'){
    console.log("O numero é 5 (3)");
};

if(numero !== '5'){
    console.log("não é o numero 5");
};

if(numero !== 5){
    console.log("não é o numero 5");
};