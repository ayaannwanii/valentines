const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");
const memeSound = document.getElementById("memeSound");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;

// Start background music on first interaction
document.body.addEventListener("click", () => {
  bgMusic.play();
}, { once: true });

// No button logic
noBtn.addEventListener("click", () => {
  noCount++;

  const x = Math.random() * 400 - 200;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount >= 2) {
    message.textContent =
      "How can you say No if I am the best ever 😌💖";
  }
});

// Yes button logic
yesBtn.addEventListener("click", () => {
  bgMusic.pause();
  memeSound.play();

  document.querySelector(".container").style.display = "none";
  finalScreen.style.display = "flex";
});
