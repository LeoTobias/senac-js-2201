/*

const LI = document.createElement('li');
const A = document.createElement('a');
const I = document.createElement('i')

LI.className = 'collection-item';
A.className = 'delete-item secondary-content';
I.className = 'fa fa-remove';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title','Novo Item');

LI.appendChild(document.createTextNode('Ler mais'));

A.appendChild(I);
LI.appendChild(A);


const UL = document.querySelector('ul.collection');

UL.appendChild(LI);

console.log(LI); 

*/

const novoTitulo = document.createElement('h2');
const tituloAntigo = document.getElementById('task-title');
const acaoNoCard = document.querySelector('.card-action');

novoTitulo.id = 'task-title';

novoTitulo.appendChild(document.createTextNode('Listinha'));

acaoNoCard.replaceChild(novoTitulo, tituloAntigo);
