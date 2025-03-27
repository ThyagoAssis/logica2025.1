let valorUm = prompt("Informe um valor: ")
let valorDois = prompt("Informe o valor dois: ")

//Função que devole a soma
function somar(){
    let resultado = parseFloat(valorUm) + parseFloat(valorDois)
    return resultado
}

//função que devolve a multiplicação
function multiplicar(){
    let resultado = parseFloat(valorUm) * parseFloat(valorDois)
    return resultado
}

//Exibe no html
document.getElementById("soma").innerHTML = somar()
document.getElementById("multiplicacao").innerHTML = multiplicar()