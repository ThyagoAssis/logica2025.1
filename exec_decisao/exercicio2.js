/* 
    Considerando duas notas (ex: let nota1 = 7; let nota2 = 5;), calcule a média e use uma estrutura de decisão para exibir se o aluno foi aprovado (média >= 6), em recuperação (média entre 4 e 5.9) ou reprovado (média < 4).
*/

let nota1 = 7
let nota2 = 8
let media = (nota1+nota2)/2

// Método 01
/* if (media >= 6){
    console.log("Aluno aprovado")
}else if (media >= 4 && media <= 5.9 ){
    console.log("Aluno em recuperação")
}else{
    console.log("Aluno reprovado")
} */

//Metodo 02
if (media >= 6){
    console.log("Aluno aprovado")
}else if (media < 4){
    console.log("Aluno reprovado")
}else{
    console.log("Aluno em recuperação")
}