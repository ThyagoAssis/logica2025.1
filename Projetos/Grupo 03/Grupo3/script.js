// Função para gerar as tabuadas de adição, subtração, multiplicação e divisão
function gerarTabuadas() {
    // Obtém o número inserido pelo usuário
    let numero = document.getElementById('numero').value;
    let resultadoDiv = document.getElementById('resultado');

    // Converte o valor para número inteiro
    numero = parseInt(numero);

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Verifica se o número é válido
    if (isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    // Lista de operações
    let operacoes = [
        { nome: 'Adição', simbolo: '+', calcular: function(a, b) { return a + b; } },
        { nome: 'Subtração', simbolo: '-', calcular: function(a, b) { return a - b; } },
        { nome: 'Multiplicação', simbolo: '×', calcular: function(a, b) { return a * b; } },
        { nome: 'Divisão', simbolo: '÷', calcular: function(a, b) { return (a / b).toFixed(2); } }
    ];

    // Cria as tabuadas
    operacoes.forEach(function(operacao) {
        // Cria uma div para cada operação
        let coluna = document.createElement('div');
        coluna.className = 'coluna';

        // Cria o título da operação
        let titulo = document.createElement('h2');
        titulo.textContent = 'Tabuada de ' + operacao.nome;
        coluna.appendChild(titulo);

        // Cria a lista de resultados
        let lista = document.createElement('ul');

        // Calcula e adiciona os resultados à lista
        for (let i = 1; i <= 10; i++) {
            let resultado = operacao.calcular(numero, i);
            let item = document.createElement('li');
            item.textContent = numero + ' ' + operacao.simbolo + ' ' + i + ' = ' + resultado;
            lista.appendChild(item);
        }

        // Adiciona a lista à coluna
        coluna.appendChild(lista);

        // Adiciona a coluna ao resultadoDiv
        resultadoDiv.appendChild(coluna);
    });
}




