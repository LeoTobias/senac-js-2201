/*
document.querySelector('span.card-title').addEventListener('click', function(evento){
    
    evento.preventDefault();
    let title = document.querySelector('h5#task-title');
    title.style.color = 'red';
    
});

*/
/* LIMPA TODAS AS TAREFAS 

document.querySelector('a.clear-tasks').addEventListener('click', function(evento){
    evento.preventDefault();

    const ITENS =  document.querySelector('ul.collection');
    ITENS.remove();
});

document.querySelector('a.clear-tasks').addEventListener('mouseover', function(evento){
    evento.preventDefault();

    const ITENS =  document.querySelector('a.clear-tasks');
    ITENS.innerHTML = 'Limpa Não';
});

FIM limpa todas as tarefas 

`` String template usado para interpolação
´´
""

*/


/* 

const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostraEvento);

function mostraEvento(evento){
    console.log(`Tipo de evento: ${evento.type}`);
    titulo.textContent = `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;
    //Going Brega
    document.body.style.backgroundColor = `rgb(${evento.offsetX},${evento.offsetY}, 40)`;
}


*/

const btn = document.querySelector('input.btn');
const campo = document.querySelector('input#task');

btn.addEventListener('click', addTarefa);


function addTarefa(evento){
    evento.preventDefault();

    const UL = document.querySelector('ul.collection');
    const LI = document.createElement('li');
    const A = document.createElement('a');
    const I = document.createElement('i')
    
    LI.className = 'collection-item';
    A.className = 'delete-item secondary-content';
    I.className = 'fa fa-remove';
    
    LI.setAttribute('title','Novo Item');
    A.setAttribute('href','#');
    
    LI.appendChild(document.createTextNode(campo.value  ));
    
    UL.appendChild(LI);
    A.appendChild(I);
    LI.appendChild(A);
}



