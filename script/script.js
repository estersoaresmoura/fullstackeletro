function exibirCategorias(categoria){
    //alert(categoria);
    let caixaDeProduto = document.getElementsByClassName('box-produto');

    for(let contador = 0; contador < caixaDeProduto.length; contador++){
        if(categoria == caixaDeProduto[contador].id){
            caixaDeProduto[contador].style = "display:inline-block";
        }else{
            caixaDeProduto[contador].style = "display:none";
        }
    }
}

function exibirTodos(){
    let caixaDeProduto = document.getElementsByClassName('box-produto');

    for(let contador = 0; contador < caixaDeProduto.length; contador++){
        caixaDeProduto[contador].style = "display;inline-block";
    }
}

function destaque(imagem){
    if(imagem.width == 100){
        imagem.style = "width:120px;";
    }else{
        imagem.style = "width:100px;";
    }
}