//A class = Molde

class Calculadora{
    //metodo padrao de toda classe js
    constructor(){
        this.valorUm
        this.valorDois
        this.resultado
    }

    somar(){
        this.resultado = parseFloat(this.valorUm) + parseFloat(this.valorDois)
        return this.resultado
    }

    multiplicar(){
        this.resultado = parseFloat(this.valorUm) * parseFloat(this.valorDois)
        return this.resultado

    }
}

const minhaCalc = new Calculadora()
minhaCalc.valorUm = prompt("Informe o valor um: ")
minhaCalc.valorDois = prompt("Informe o segundo valor: ")

document.getElementById("soma").innerHTML = minhaCalc.somar()
document.getElementById("multiplicacao").innerHTML = minhaCalc.multiplicar()

