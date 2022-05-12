/*
Atributos = variáveis;

funções = métodos();

classe é a definição de objeto, como se a classe fosse uma planta de uma casa e o objeto seria uma casa pronta.
*/

/* De objeto JSON para string


const OBJ = {   nome: "Bono",
                idade: 37,
                fazCompra: function(){
                    console.log('Comprou alguma coisa');
                }};

console.log(JSON.stringify(OBJ));

OBJ.fazCompra();

*/

/*  De string para objeto JSON

const STR = '{"nome": "Bono", "idade": 37}';

console.log(JSON.parse(STR));

*/


localStorage.setItem('nome', 'Leo');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');



document.querySelector('input.btn').addEventListener('click', add);

function add(e){

    e.preventDefault();
    try{
        const valorUsuario = document.querySelector('#task').value;
    
        document.querySelector('#task').value = '';
    
        sessionStorage.setItem('tarefa', valorUsuario);

    }catch(e){
        alert('Falha ao pegar o valor do usuário: ' + e.message);
    }

}

const TRF = sessionStorage.getItem('tarefa');

if(TRF){
    document.querySelector('#exibe').innerText = TRF;
}