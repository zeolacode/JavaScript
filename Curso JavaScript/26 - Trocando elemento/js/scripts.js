// criar um elemento 
var el = document.createElement('h3')

el.classList = 'testando-classe';

var texto = document.createTextNode("Este é o texto do h3")

el.appendChild(texto);

console.log(el);

// trocar h1 por h3 

// Selecionar o elemento h1
var title = document.querySelector('#title');

console.log(title);

// selecionar elemento pai do el 
var pai = title.parentNode; // document.querySelector(body)

// trocando elementos
pai.replaceChild(el, title); 

