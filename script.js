const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");
const memeSound = document.getElementById("memeSound");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;

// Start romantic music on first click
document.body.addEventListener("click", () => {
  bgMusic.play();
}, { once: true });

noBtn.addEventListener("click", () => {
  noCount++;

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount >= 2) {
    message.textContent = "How can you say No if I am the best ever 😌💖";
  }
});

yesBtn.addEventListener("click", () => {
  bgMusic.pause();
  memeSound.play();

  document.querySelector(".container").style.display = "none";
  finalScreen.style.display = "flex";
});