//setTimeout

console.log("Antes do setTimeout");

// chamada assíncrona
setTimeout(function(){
    console.log("Testando o setTime");
}, 2000) // 2 segundos

console.log("Depois do setTimeout");

// setInterval
setInterval(function(){
    console.log("testando setInterval");

}, 1000)
