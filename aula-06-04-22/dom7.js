const LISTA = document.querySelector('ul');
const ITENS =  document.querySelectorAll('li');

//ITENS[0].remove(); //remove tudo que está no UL

//LISTA.removeChild(ITENS[2]); //remove apenas um elemento li dentro do ul

ITENS.forEach(function(val, ind){

    LISTA.removeChild(ITENS[ind]);

});


const btn = document.querySelector('a');

btn.remove();