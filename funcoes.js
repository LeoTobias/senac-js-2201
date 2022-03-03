function olaMundoNoLog(nome){
    console.log(`Olá ${nome}!`);
}

const SOMA = function(a, b){
    return a + b;
};

olaMundoNoLog('Leonardo');
let resultado = SOMA(2,2);

console.log(resultado);

(function(a, b){
    console.log(a + b);
})(3, 3);

let lista = ['leonardo','lucas','rabino']

function pegaUltima(vet){

    let ult = vet.length - 1;

    return vet[ult];
}

let novoVetor = pegaUltima(lista);

console.log('Último elemento = ' + novoVetor);

let aluno = {   nome: "Amanda",
                matricula: 5491349,
                setNome: function(n){
                    console.log('Mudado p/ ' + n);
                }};

aluno.setNome('Blabla');

let hoje = new Date;




function retornaMes(m){

    const MES = [   'Janeiro', 
                    'Fevereiro', 
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'];

    let atual = new Date;

    return MES[atual.getMonth()]
}
console.log(retornaMes());