/* 10/2 = 5
resta = 0

11 / 2 = 5
resta = 1
 */

/* se o resto da divisao de um numero por dois for zero. 
    que esse numero é par
senão esse numero é impar */

let numero = 85
let resto_divisao = numero % 2

if (resto_divisao == 0){
    console.log("Numero Par")
}else{
    console.log("Numero impar")
}