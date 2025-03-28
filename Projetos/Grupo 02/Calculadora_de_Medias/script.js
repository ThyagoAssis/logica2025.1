/* 
Desenvolver uma calculadora que recebe notas de alunos e calcula a média, 
informando se o aluno foi aprovado ou reprovado. 
*/

// Usar array para armazenar as notas. 
let nota = [];

let checkNum = true;

let checkNum2 = true;

let soma = 0;

let media;

let mapaAluno;

let mapaNota;

let aluno = prompt("Informe o nome do aluno:");

while(aluno === ""){
    alert("Nome não pode ser vazio!");
    aluno = prompt("Informe o nome do aluno:");
}

/*
Estruturas de repetição para permitir a entrada de várias notas.
*/
let promptNota = prompt("Informe a nota do aluno:");

while(checkNum) {
    let notaNum = parseFloat(promptNota);

    if(isNaN(notaNum)) {
        alert("Erro: nota não pode ser vazia!")
        promptNota = parseFloat(prompt("Informe a nota do aluno:"));
    } else {
        nota.push(notaNum);
        checkNum = false;
    }
}

while(confirm("Quer adicionar mais notas?") == true) {
    checkNum2 = true;
    let promptNota2 = parseFloat(prompt("Informe a nota do aluno:"));
    
    while(checkNum2){
        let notaNum2 = parseFloat(promptNota2);
    
        if(isNaN(notaNum2)) {
            alert("Erro: nota não pode ser vazia!")
            promptNota2 = parseFloat(prompt("Informe a nota do aluno:"));
        } else {
            nota.push(notaNum2);
            checkNum2 = false;
        }
    }
}

soma = nota.reduce((diariodenotas, nota) => diariodenotas + nota)

media = soma / nota.length;

mapaAluno = aluno;
mapaNota = nota.map(x => x);

document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
document.writeln("Notas do aluno: " + mapaNota + "<br/><br/>");
document.writeln("");

/* 
Estruturas de decisão para determinar a aprovação (média >= 7). 
Exibir a média e o status (aprovado/reprovado)
*/
if(media >=7) {
    document.writeln(aluno + " aprovado! A média foi: " + media + "<br/><br/>");
} else {
    document.writeln(aluno + " reprovado! A média foi: " + media + "<br/><br/>");
}

document.writeln("=======================================" + "<br/><br/>");

/* 
Permitir que o usuário insira notas de vários alunos e exibir um relatório final.
*/
while(confirm("Quer adicionar mais alunos?") == true) {

    let aluno = prompt("Informe o nome do aluno:");

    // Usar array para armazenar as notas.
    let nota = [];

    let promptNota = prompt("Informe a nota do aluno:");

    let checkNum = true;

    let checkNum2 = true;

    let soma = 0;

    let media;

    let mapaAluno;

    let mapaNota;

    while(aluno === ""){
        alert("Nome não pode ser vazio!");
        aluno = prompt("Informe o nome do aluno:");
    }

    /*
    Estruturas de repetição para permitir a entrada de várias notas.
    */
    while(checkNum) {
        let notaNum = parseFloat(promptNota);

        if(isNaN(notaNum)) {
            alert("Erro: nota não pode ser vazia!")
            promptNota = parseFloat(prompt("Informe a nota do aluno:"));
        } else {
            nota.push(notaNum);
            checkNum = false;
        }
    }

    while(confirm("Quer adicionar mais notas?") == true) {
        checkNum2 = true;
        let promptNota2 = parseFloat(prompt("Informe a nota do aluno:"));
        
        while(checkNum2){
            let notaNum2 = parseFloat(promptNota2);
        
            if(isNaN(notaNum2)) {
                alert("Erro: nota não pode ser vazia!")
                promptNota2 = parseFloat(prompt("Informe a nota do aluno:"));
            } else {
                nota.push(notaNum2);
                checkNum2 = false;
            }
        }
    }

    soma = nota.reduce((diariodenotas, nota) => diariodenotas + nota)

    media = soma / nota.length;

    mapaAluno = aluno;
    mapaNota = nota.map(x => x);

    document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
    document.writeln("Notas do aluno: " + mapaNota + "<br/><br/>");
    document.writeln("");

    /* 
    Estruturas de decisão para determinar a aprovação (média >= 7). 
    Exibir a média e o status (aprovado/reprovado)
    */
    if(media >=7) {
        document.writeln(aluno + " aprovado! A média foi: " + media + "<br/><br/>");
    } else {
        document.writeln(aluno + " reprovado! A média foi: " + media + "<br/><br/>");
    }

    document.writeln("=======================================" + "<br/><br/>");
}