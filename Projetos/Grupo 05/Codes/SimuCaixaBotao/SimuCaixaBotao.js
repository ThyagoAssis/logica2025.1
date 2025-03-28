let saldo = 0
let limiteDiario = 500
let saldoTexto = "Saldo: R$"
const historico = []

 
function depositar(){ //função para depositar
    let deposito = parseFloat(prompt("digite o valor para depositar:")) //parseFloat - para números com vírgula
        if(!isNaN(deposito) && deposito > 0){ //!isNaN - verifica se é um número
            saldo += deposito
            historico.push("Depósito realizado de R$" + deposito.toFixed(2)) //insere a operação no array historico
            alert("Depósito realizado. Novo saldo: R$" + saldo.toFixed(2)) //toFixed - formata casas decimais                
            document.getElementById("saldoTexto").innerHTML = saldoTexto + saldo.toFixed(2)
        }else{
            alert("Operação inválida.")
        }
}


function sacar(){ //Função para sacar
    let saque = parseFloat(prompt("digite o valor para sacar:"))
        if(!isNaN(saque) && saque > 0 && saque <= limiteDiario && saque <= saldo){
            saldo -= saque
            historico.push("Saque realizado de R$" + saque.toFixed(2))
            alert("Saque realizado. Novo saldo: R$" + saldo.toFixed(2))
            document.getElementById("saldoTexto").innerHTML = saldoTexto + saldo.toFixed(2)     
        }else {
            alert("Operação inválida.")
        }        
}

function verHistorico(){ //Função para ver o historico
    if (historico == 0){
        alert("Nenhuma operação foi realizada.")
    }else{
    alert("historico de operações: \n" + historico.join("\n")) //join - para quebra de linha
    }
}

function fecharSistema(){
    location.reload() //renicia a página do navegador
    alert("sistema encerrado.")
}
 