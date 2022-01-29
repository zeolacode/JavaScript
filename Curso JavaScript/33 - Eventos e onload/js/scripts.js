
// este evento so é carregado quando todo o DOM é carregado
window.onload = function(){

    console.log("Carregou o DOM");
    
    var title2 = document.querySelector('#title');
    console.log(title2);
}

console.log("Carregou o JS");

var title = document.querySelector('#title');

// elemento ainda não foi carregado 
console.log(title);