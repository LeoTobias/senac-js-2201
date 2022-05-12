localStorage.setItem('nome', 'Leo');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

//
try{

    document.querySelector('input.btn').addEventListener('click', function(e){
    
        e.preventDefault.Default();
    
        const TAREFAS = document.querySelector('#task').value;
    
        let tarefas;
    
        if(localStorage.getItem('tarefas') === null){
    
            tarefas = [];
    
        }else{
    
            tarefas = JSON.parse(localStorage.getItem('tarefas'));
        }
    
        tarefas.push(TAREFAS);
        
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        
        console.log(TAREFAS);
    
        document.querySelector('#task').value = '';
    
    });

} catch(error){
    alert('O motivo do erro é: ' + error.message);
}

//Para sessionStorage é só trocar todos localStorage para sessionStorage