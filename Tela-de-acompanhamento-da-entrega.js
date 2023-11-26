function search() {
    let input = document.getElementById('searchPedido').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('pedido')

    for(i = 0; i < x.length; i++){
       if(!x[i].innerHTML.toLocaleLowerCase().includes(input)){
        x[i].style.display = "none"
       }else{
        x[i].style.display = "list-item"

       }
    }
}