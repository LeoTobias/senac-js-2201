
let resultado = document.querySelector('.resultado');
let btn = document.getElementById('btn');

btn.addEventListener('click', curiosidadesSobreNumeros)

function curiosidadesSobreNumeros(e){
    e.preventDefault();
    
    const numero = document.querySelector('input').value;
    const curiosidade = document.getElementById('curiosidades').value;

    switch(curiosidade){
        case 'matematica':
            fetch(`http://numbersapi.com/${numero}/math`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;
        case 'data':
            fetch(`http://numbersapi.com/${numero}/date`).then(function(resultado) {
                        return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;
        case 'trivia':
            fetch(`http://numbersapi.com/${numero}/trivia`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;
        case 'ano':
            fetch(`http://numbersapi.com/${num}/year`).then(function(resultado) {
                    return resultado.text();
                }).then(function(conteudo) {
                    document.getElementById('resultado').innerText = conteudo;
                });
                break;
        default:
            throw SyntaxError ('Operação indisponível');
    }
}

