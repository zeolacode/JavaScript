// querySelector e querySelectorAll

// obs - regra de CSS

// querySelectorAll
var itensClass = document.getElementsByClassName('item'); 

console.log(itensClass);

// pegando somente itens de id = lista2

var itensQuery = document.querySelectorAll('#lista2 li'); // para pegar vários elementos!!

console.log(itensQuery);

// ou

var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector
var itensQuery3 = document.querySelector('#lista'); //pega somente um elemento!!

console.log(itensQuery3); 

var primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span);