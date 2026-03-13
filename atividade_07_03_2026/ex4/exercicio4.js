//exercicio 4
var btn_act = window.document.querySelector("input#btn_act")
btn_act.addEventListener("click" , escrever_algo)






function escrever_algo(){
    let div_forma = window.document.querySelector("div#div_triangulo")
    div_forma.innerHTML = ""
    var txt_num = window.document.getElementsByTagName("input")[0].value
    var num = Number(txt_num)
    let c = 0
    for(let i = 1 ; i <= num ; i++){
        c = 0
        while(c < i){
            div_forma.innerHTML += ("*")
            c++
        }
    div_forma.innerHTML += "<BR>"
}    
}