const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

//Carregador de monitores de eventos (event Listeners)

function carregaMonitorDeEventos(){
    
    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa);
    FORMULARIO.addEventListener('submit',adicionaTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);

}

function pegaTarefa(){
    
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    tarefas.forEach(function(tarefa){
        // Cria os novos elementos
        const LI = document.createElement('li');
        LI. className = 'collection-item';
        LI.appendChild(document.createTextNode(tarefa));

        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';

        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        
        A.appendChild(I);
        LI.appendChild(A);

        //FIM cria os novos elementos

        LISTA.appendChild(LI); // Adiciona à lista de tarefas;
    });
}

function adicionaTarefa(e){

    e.preventDefault();
    if(CAMPO_TAREFA.value === ''){ // Verifica se o campo está vazio.
        
        alert('Insira uma tarefa!');

    }else {

        // Cria os novos elementos
        const LI = document.createElement('li');
        LI. className = 'collection-item';
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));

        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';

        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        
        A.appendChild(I);
        LI.appendChild(A);

        //FIM cria os novos elementos

        LISTA.appendChild(LI); // Adiciona à lista de tarefas;

        gravaTarefaNoLocalStorage(CAMPO_TAREFA);
        
        CAMPO_TAREFA.value = '';
    }

}

function gravaTarefaNoLocalStorage(tarefa){

    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa.value);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function apagaTarefa(e){
    
    e.preventDefault();
    
    if(e.target.parentElement.classList.contains('apaga-tarefa')){
        e.target.parentElement.parentElement.remove();
    }
}

function apagaTodasTarefas(e){

    e.preventDefault();

    LISTA.innerHTML = '';
}

function filtraTarefa(e){
    
    const texto =  e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        const item = tarefa.firstChild.textContent;

        if(item.toLowerCase().indexOf(texto) != -1){ // -1 Significa que não há o uqe está sendo buscado
            tarefa.style.display = 'block';
        }else{
            tarefa.style.display = 'none';
        }
    });
}

carregaMonitorDeEventos();