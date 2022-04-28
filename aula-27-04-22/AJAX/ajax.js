// Exemplo com XHR

document.querySelector('button#xhr').addEventListener('click', buscarDados);

function buscarDados(){
    
    const XHR = new XMLHttpRequest(); /** O operador new instancia uma classe **/

    XHR.open('GET', 'http://10.135.236.17:5500/AJAX/conteudo.txt', true); // true = assincrono, síncrono está sendo descontinuado

    XHR.onload = function(){
        if(this.status === 200) { // HTTP code 200 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
        }
    }

    XHR.send(); // Realiza a requisição.
}


// Exemplo com Fetch

document.querySelector('button#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){

    fetch('conteudo.txt').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}