console.log("iniciado")

function iniciar_jogo(){
    let txt_num = window.prompt("Digite um numero inteiro de 1-3")
    let num_usu = Number(txt_num)
    let div_resultado = window.document.getElementById("div_resultado")
    div_resultado.innerHTML = ""
    if(num_usu >= 1 && num_usu <= 3 && typeof(num_usu) == 'number'){
        let maq_num = sorteio_aleatorio( 3 , 1)
        let result = comparar_escolhas(num_usu , maq_num)
        if(result == -1){
            div_resultado.innerHTML = "<h3>Empate!!!</h3>"
        }
        else if(result == 1){
            div_resultado.innerHTML = "<h3>Você venceu!!!</h3>"
        }
        else if(result == 0){
            div_resultado.innerHTML = "<h3>Você perdeu.</h3>"
        }
            div_resultado.innerHTML += `<h3>Sua escolha : ${num_usu}\<BR> Escolha do adversario: ${maq_num}</h3>`
    }
    else{
        div_resultado.innerHTML = "Digite um numero de 1 a 3"
    }
}

function comparar_escolhas(usu_num , maq_num){
    if( usu_num == maq_num ){
        return -1
    }
    if(usu_num == 1){
        if(maq_num == 2){
            return 0
        }
        else if(maq_num == 3) {
            return 1
        }
    }
    if(usu_num == 2){
        if ( maq_num == 1 ){
            return 1
        }
        else if (maq_num == 3){
            return 0
        }
    }
    if(usu_num == 3){
        if(maq_num == 1 ){
            return 0
        }
        else if( maq_num == 2){
            return 1
        }
    }
}

function sorteio_aleatorio(max , min){
    return parseInt(((Math.random() * 100) % max) + min)
}