// 11 - Operadores lógicos 

// AND ou &&
var idade = 13;
var nome = "João";

if(nome == "João" && idade == 17){
    console.log("O joão pode entrar na aula de esgrima");
} else {
    console.log("Este não é João");
};

if(1 == 1 && 3 > 3 && true){
    console.log("Passou");
} else if(nome === "João" && idade >= 14) {
    console.log("Aqui passa!")
}

// OR ||
var idade = 13;
var nome = "João";

if(nome === "João" || idade > 14){
    console.log("Pode entrar na aula de esgrima");
} else {
    console.log("Não pode entrar")
}

if(nome == "Pedro" && 15 > 20 || 10 == 10){
    console.log("testando")
}

if((nome == "Pedro" || 15 > 20) && 10 == 10){
    console.log("testando 2")
}

if((nome == "Pedro" || 30 > 20) && 10 == 10){
    console.log("testando 3")
}

// ! NOT (inverte a lógica)
if(!true){
    console.log("Passou");
};

if(!false){
    console.log("Passou xxx");
};

var nome = "pedro";

if(!(nome == "João")){
    console.log("ok");
}
