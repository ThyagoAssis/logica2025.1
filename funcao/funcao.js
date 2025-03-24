
//Escreveu a nossa função
function soma(){
    let somar = 2+2
    document.getElementById('mensagem').innerHTML = somar
}
//Chama a função
soma()

function mensagem(){
    alert("Cliquei no botão")
}

let numeroUm = prompt("Informe um valor: ")

//Funçao com passagem de parametro (Devemos informar algum valor para a função)
function dizAi(valor){
    document.getElementById('fala').textContent = valor
}
//Chama a função
dizAi(numeroUm)