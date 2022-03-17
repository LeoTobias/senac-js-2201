const tamanho = 'A:' + window.innerHeight + ' x L:' + window.innerWidth;

const navegador = window.navigator.userAgent;

const p = document.getElementById("paragrafo");

const title = document.querySelector('h1');

title.innerText = 'Oi Lindão';

p.innerText = navegador;

console.log(navegador);