const audioNao = document.getElementById("audioNao");

const messages = [
  "Tem certeza bixo?",
  "É sério mrm??",
  "Tu tem absoluta certeza disso?",
  "Certeza, colega?",
  "Eu te mato, tu ainda vai dizer não?",
  "Se tu disser não, eu vou morrer",
  "F Geandrinho7",
  "Fala logo sim, amor ❤️"
];

let messageIndex = 0;
let noClicked = false;

document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.addEventListener('click', () => {
    // Reproduz o áudio apenas uma vez
    if (!noClicked) {
      audioNao.play();
      noClicked = true;
    }

    // Altera a mensagem
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Aumenta tamanho do botão "Sim"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.6}px`;
  });

  yesButton.addEventListener('click', () => {
    window.location.href = "yes_page.html";
  });
});
