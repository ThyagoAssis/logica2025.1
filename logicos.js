/*
    Operadores Lógicos
        && (E) - As duas condições precisam ser verdadeiras
        || (OU) - Apenas uma condição precisa ser verdade
        ! (Não) - Inverte o valor( a verdade passa ser falsa e o falso passa a ser verdade)
*/

let idade = 10
let temCarteira = true

console.log("Pode dirigir? ", (idade >= 18 && temCarteira) ? "sim" : "não" )
console.log("Pode dirigir? ", (idade >= 18 || !temCarteira) ? "sim" : "não" )