/* 
    Trabalhando array 
        É uma variavel com divisórias
*/
// o simbolo [], conhecido como a gaveta da vovo,  representa um array ou matriz
let frutas = ["Maçã","Banana","Laranja"]

//Exibe todo o array
console.log(frutas)

//Exibe somente banana
console.log(frutas[1])

//Adiciona um valor ao array
frutas.push("Uva")
console.log(frutas)

//Remove o ultimo elemento
frutas.pop()
console.log(frutas)

/* 
    1 - Crie um array com 10 numeros e calcule a soma de todos os elementos e ao fina exiba o resultado( Pesquisar sobre o metodo reduce ) 
*/

let numeros = [1,2,3,4,5,6,7,8,9,10]
let resultado = numeros.reduce((cofrinho,mes) => cofrinho + mes)
console.log("Resultado com reduce",resultado)

//------------------------------------------------------

let numeroDois = [5,10,15,30]
let porquinho = 0
//O metodo length pega o tamanho do array
for (let i = 0; i < numeroDois.length; i++){
    mes = numeroDois[i]
    porquinho = porquinho + mes
}
console.log(porquinho)