const palavra = [
    { palavra: "python", dica: "Linguagem com um mascote réptil" },
    { palavra: "javascript", dica: "A alma dos sites interativos" },
    { palavra: "programação", dica: "A arte de falar com máquinas" },
    { palavra: "Desenvolvedor", dica: "Constrói o mundo digital" },
    { palavra: "html", dica: "A estrutura da web."}
  ];
  

/* Função que escolhe uma palavra do array de forma aleatória */
  export default function pegaPalavra() {
    const index = Math.floor(Math.random() * palavra.length);
    return palavra[index];
  }