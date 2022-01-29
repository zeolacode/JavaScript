// 12 - Estrutura de repetição 

// while
var x = 0;

while(x < 5){
    console.log("Testando repetição " + x);

    //incremento
    x++;
};

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y]);
    document.write(arr[y] + " ")
    y++;
};

var palavra = "pedro";
var i = 0;

while(i <=4 ){
    console.log(palavra[i]);

    i += 1;

}

console.log("*************************")
// resumo de operador de atribuição (+=, -=, *=, /=)

var x = 1;
var y = 2;

// soma
console.log(x = x + y);
console.log(x += y);

// subtração 
console.log(x -= y);

// multiplicação
console.log(x *= y);

// divisão
console.log(x /= y);

console.log(x++);
console.log(x--);

while( x <= 100){

    console.log(x);

    x *= 2;

}

while(x > 0){

    console.log(x);

    x -= 5;

}

console.log("*************************")


// for (variável; condição ; incremento)

for(var i=0; i < 10; i++){
    console.log("repetindo for: " + i);
}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

console.log(arr.length);

for(var x = 5; x < 100; x *= 3){
    console.log(x);
}

console.log("*************************")

// Breack e continue

for(var i = 10; i > 0; i--){

    console.log(i);

    if(i === 5){
        break;
    }

}

console.log("Deu break");

x = 10;

while(x < 100){

    x += 10;

    if(x === 60 || x === 90) {
        console.log("CONTINUE")
        continue;
    }

    console.log("Testando continue: " + x);

}

console.log("Testando continue: " + x)