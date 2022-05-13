let resultado = document.getElementById('resultado');
document.querySelector('button#fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    let nome = document.getElementById('nome').value;

    fetch('https://api.agify.io?name=' + nome,{method:'GET'})
        .then(function(response){return response.json();})
        .then(data => {
            if(nome != ''){
                resultado.innerHTML = 'Eu acho que sua idade é: ' + data.age;
                resultado.style.display = 'block';
                console.log(data.age);
            }else{
                resultado.style.display = 'none';
            }
    })
    .catch(erro => console.log(erro));
}





