// DOM - Document Object Model
// interface de programação para HTML
// fornece uma cópia do HTML
// podemos manipular o HTML
// eventos 

// Acessar elementos do DOM
// tag

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);
console.log(lis);

// id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);
