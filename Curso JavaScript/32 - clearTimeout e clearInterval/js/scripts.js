// clearTimeout
var x = 0;

var myTimer = setTimeout(function(){
    console.log("o x é 0");
}, 1500);

x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearSetInterval

var myInterval = setInterval(function(){
    console.log("imprimindo interval");
}, 500);

setTimeout(function(){

    console.log("Não precisamos mais repitir!");
    clearInterval(myInterval);

}, 1500);