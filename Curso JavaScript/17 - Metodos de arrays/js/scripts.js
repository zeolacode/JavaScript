// length

var arr = [1,2,3,4,5];

console.log(arr.length);

// push add alguma coisa
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop remove o elemento do fim do array
arr.pop();

console.log(arr);

// unshift add no começo do array
arr.unshift(0);
arr.unshift("teste");

console.log(arr);

// shift -> remove do inicio do array

arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));

// splice

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); // (indice, elementos a ser deletado, elemento a ser add)

console.log(arr)

arr.splice(4, 1);

console.log(arr);

// indexOf

console.log(arr.indexOf(5));

// join
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));
console.log(arr2.join(","));
console.log(arr2.join("/"));

// reverse
console.log(arr2.reverse())