
// selecionar o elemento
var title = document.querySelector('#title');
var subtitle = document.querySelector('.subtitle');

console.log(title);
console.log(subtitle);

// 2 formas para modificar o elemento

// inerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendado 

subtitle.textContent = "Testando o textContent";




