//Exercicio 1
var rand_num = Math.random()
rand_num = Math.round((rand_num * 100) % 21)
var div_dica = window.document.getElementById("dicas_num");
function advinhar_num(){
    var num_input = window.document.getElementsByTagName("input")[0]
    var num_d = Number(num_input.value)
    console.log(rand_num)
    if(num_d != ""){        
        if( num_d > rand_num ){
            div_dica.innerHTML = "O numero digitado é maior que o número sorteado."
        }
        else if( num_d < rand_num ){
            div_dica.innerHTML = "O numero digitado é menor que o número sorteado "
        }
        else if(num_d == rand_num){
            div_dica.innerHTML = "Parabens, você acertou!"
        }
    }
}
