// inserindo no body
// criando elemento <p> </p>
var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

// criando conteudo para ser add no elemneto <p></p>
var texto = document.createTextNode('Este é o conteudo do paragráfo');

// add conteudo no elemento <p></p>
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// add no body
var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container
var container = document.getElementById('container');

console.log(container);

var el = document.createElement('span');

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el)
