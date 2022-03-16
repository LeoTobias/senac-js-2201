const p = document.getElementById("paragrafo");

p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')) {
    let valor = parseInt(prompt("Digite um número"));

    if(valor >= 0 && valor <=10) {
        for (i = 0; i < valor; i++){
            p.innerText = p.innerText + 'LeoTobias\n';
            console.log(valor);
        }
    } else {
        p.innerText = 'Valor inválido';
    }

} else {
    p.innerText = 'Que pena que você não entrou com um valor :(';
}