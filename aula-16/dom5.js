//PEGANDO ELEMENTOS ÚNICOS

//console.log(document.querySelector('li:first-child').innerText);

//console.log(document.querySelector('li:last-child').innerText);

//console.log(document.querySelector('li:nth-child(1)').innerText);

//console.log(document.querySelector('li:nth-child(1)').innerText);

//PEGANDO ELEMENTOS MÚLTIPLOS

/* 
console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item')

itens[0].style.color = 'green';
*/

// OU

/* 
const itens = document.querySelector('ul').getElementsByClassName('collection-item');
itens[0].style.color = 'green';
*/ 

// OU

/*
const itens = document.getElementsByTagName('li');
itens[0].style.color = 'green';
itens[2].style.color = itens[3].style.color = 'red';
*/

/*
const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

itensArray.forEach(function(li, indice){
    console.log(`${indice}: li.innerText`);
});
*/

//let itensImpares = document.querySelectorAll('li:nth-child(odd)');
//console.log(itensImpares);

// OU even para par

let itensImpares = document.querySelectorAll('li:nth-child(odd)');

let itens = document.getElementsByTagName('li');

let mudaCor = Array.from(itensImpares);

mudaCor.forEach(function(item){

    item.style.color = 'red';

});


