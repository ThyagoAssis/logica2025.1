/* 
Dado três lados de um triângulo (ex: let lado1 = 10; let lado2 = 10; let lado3 = 8;), determine se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e exiba o tipo no console. */

let ladoUm = 2
let ladoDois = 3
let ladoTres = 2

if (ladoUm == ladoDois && ladoDois == ladoTres){
    console.log("Equilatero")
}else if (ladoUm == ladoDois || ladoUm == ladoTres || ladoDois == ladoTres){
    console.log("Isoceles")
}else{
    console.log("Escaleno")
}