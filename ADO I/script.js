const btn = document.querySelector('button#calcular').addEventListener('click', calculaIMC);
const btn2 = document.querySelector('button#apagar').addEventListener('click', apagarIMC);


function calculaIMC(evento){
    evento.preventDefault();

    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    altura = altura.replace(',', '.');

    let imc = peso / (altura*altura);

    if(imc < 16){
        var traducao = 'Baixo peso muito grave';
    }else if(imc >= 16 && imc < 16.99){
        var traducao = 'Baixo peso grave';
    }else if(imc >= 17 && imc < 18.49){
        var traducao = 'Baixo peso ';
    }else if(imc >= 18.50 && imc < 24.99){
        var traducao = 'Peso normal';
    }else if(imc >= 25 && imc < 29.99){
        var traducao = 'Sobrepeso';
    }else if(imc >= 30 && imc < 34.99){
        var traducao = 'Obesidade Grau I';
    }else if(imc >= 35 && imc < 39.99){
        var traducao = 'Obesidade Grau II';
    }else if(imc >= 40){
        var traducao = 'Obesidade Grau III';
    }

    let resultado = document.querySelector("#resultado");
    let p = document.createElement('p');
    
    p.textContent = "Seu IMC é: "+imc+" kg/m² e seu status é: "+traducao;

    resultado.appendChild(p);
}

function apagarIMC(evento){
    evento.preventDefault();

    let resultado = document.querySelector("#resultado");
    const p = document.querySelectorAll('p');

    p.forEach(function(val, ind){

        resultado.removeChild(p[ind]);
    
    });
}