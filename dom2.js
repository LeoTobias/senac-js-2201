const p = document.getElementById("paragrafo");

const recusou = document.getElementById("recusou");

const body = document.querySelector('body');

p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')) {
    let valor = parseInt(prompt("Digite um número"));

    if(valor >= 0 && valor <=10) {
        for (i = 0; i < valor; i++){
            p.innerText = p.innerText + 'LeoTobias\n';
            p.style.color = 'green';
            console.log(valor);
        }
    } else {
        p.innerText = 'Valor inválido';
        p.style.color = 'orange';
    }

} else {
    recusou.innerText = 'Que pena que você não entrou com um valor :(';
    recusou.style.color = 'black';
    body.style.background = 'red';
}