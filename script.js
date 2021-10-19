function calcular(){
var num1 = parseInt(document.getElementById('num1').value)
var num2 = parseInt(document.getElementById('num2').value)
var num3 = parseInt(document.getElementById('num3').value)
var resultado = document.getElementById('resultado')

var media = ((num1 + num2 + num3)/3).toFixed(2)

resultado.innerHTML = `Média = ${media}`
  
}
