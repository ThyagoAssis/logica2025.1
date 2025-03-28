import pegaPalavra from "./palavras.js";

const conteudoBtns = document.querySelector(".btns");
const conteudoPalavra = document.querySelector(".palavra-secreta");
const img = document.querySelector("img");
const conteudoDica = document.querySelector(".dica");
const btnNovoJogo = document.querySelector(".novo");
btnNovoJogo.onclick = () => iniciar();
let indexImg;


/* Chamando a função de iniciar o jogo */
iniciar();


/* Função de iniciar o jogo */
function iniciar() {
  indexImg = 1;
  img.src = `img1.png`;

  criarAreaPalpite();
  criarBotoes();
}

/* Função que cria a area onde a palavra secreta fica */
function criarAreaPalpite() {
  conteudoPalavra.textContent = "";

  const { palavra, dica } = pegaPalavra();
  const palavraSemAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraSemAcento).forEach((letra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("letra", letra.toUpperCase());
    conteudoPalavra.appendChild(span);
  });

  conteudoDica.textContent = `Dica: ${dica}`;
}

/* Função para erro e alterar imagem */
function chuteErrado() {
  indexImg++;
  img.src = `img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("Você perdeu! Tente novamente!");
      iniciar();
    }, 100);
  }
}

/* Função para verificar se a letra do palpite está na palavra */
function verificarLetra(letra) {
  const arr = document.querySelectorAll(`[letra="${letra}"]`);

  if (!arr.length) chuteErrado();

  arr.forEach((e) => {
    e.textContent = letra;
  });

  const spans = document.querySelectorAll(`.palavra-secreta span`);
  const venceu = !Array.from(spans).find((span) => span.textContent === "_");

  if (venceu) {
    setTimeout(() => {
      alert("Voce ganhou, parabens!");
      iniciar();
    }, 100);
  }
}

/* Função que cria os botoes com letra */
function criarBotoes() {
  conteudoBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letra = String.fromCharCode(i).toUpperCase();
    btn.textContent = letra;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verificarLetra(letra);
    };

    conteudoBtns.appendChild(btn);
  }
}