// exercicio 5
var btn_act =window.document.querySelector("input#btn_act")
btn_act.addEventListener("click" , soma_repetidos)



function soma_repetidos(){
    let txt_num = window.document.getElementById("num_input").value
    let div_soma = window.document.querySelector("div#div_soma")
    let num = parseInt(txt_num) 
    let i = 0
    let soma = 0
    let num_b = 0
    while( i < num ){
        num_b = 10 ** i + num_b
        soma += num_b
        i++
    }
    div_soma.innerHTML = `O ${i}° termo da soma é ${soma}`
}