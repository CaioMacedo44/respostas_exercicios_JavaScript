//exercicio 3
var button = document.getElementById("act_btn")
button.addEventListener('click' , calcular_tabuada)

function calcular_tabuada(){
  var sel_tabuada = document.getElementById("tabuada")
  var num_txt = document.getElementsByTagName("input")[0]
  let num_d = Number(num_txt.value)
  sel_tabuada.innerHTML = ""  
  for(let i = 0 ; i <= 10 ; i++){
    let item = window.document.createElement("option")
    item.text = `${ num_d } * ${ i } = ${ num_d * i }`
    sel_tabuada.appendChild(item)
  }
}