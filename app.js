//Comentário de linha

/* 
Comentário de bloco
*/

function diretoNoElemento(){
    console.log('Olá mundo');
}



function lembrando(){

    const XPTO = 10;  //Constante é um valor pré definido.

    console.log(XPTO);

    let minhaVar = ' Olá';
    
    minhaVar = minhaVar + ' Mundo!';
    
    console.log(minhaVar);
    
    let idade = parseInt(prompt("Digite sua idade"));
    
    if (idade >= 20) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    
    let cont = 1;
    while (cont < XPTO) {
        console.log("e lá vamos nós");
        cont ++;
    }
}

lembrando();