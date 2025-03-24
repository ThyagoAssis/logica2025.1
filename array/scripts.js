let nome = "Minha primeria pagina da Web"
let mensagem = alert("O que deseja: 1 - sacar, 2 - depositar")
let numeroSecreto = 12
let palpite = prompt("Informe seu palipte: ")

//Exibir algo no html
//document.write(nome)

document.getElementById('titulo').innerHTML = nome

if (palpite == numeroSecreto){
    document.getElementById('titulo').innerHTML = "Parabens você acertou!"
}else{
    document.getElementById('titulo').innerHTML = "Desculpe Você errrou!"
}

