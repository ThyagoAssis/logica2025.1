//Cria o array
let word = ["Laranja","Amarelo","Azul","Vermelho","Cruz de Malta","Roxo"]

//Transforma em maiuscula
let wordMaiusculo = word.map(word => word.toUpperCase()) 

//Filtra as palkavras
let wordFiltro = word.filter(word => word.length > 5)

//Exibe os novos arrays
console.log(wordMaiusculo)
document.getElementById("arrayMaiusculo").innerHTML = wordMaiusculo
document.getElementById("arrayFiltro").innerHTML = wordFiltro