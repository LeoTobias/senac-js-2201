document.body.addEventListener('click', apagaItem);


function apagaItem(e){

    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete-item') === true){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }

}