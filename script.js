const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");
const memeSound = document.getElementById("memeSound");
const finalScreen = document.getElementById("finalScreen");
const emojiLayer = document.getElementById("emoji-layer");

let noCount = 0;
let emojiInterval;

// Emoji sets
const loveEmojis = ["💖", "💕", "❤️", "💘", "💓"];
const yesEmojis = ["🤟"];

function startEmojiRain(emojis) {
  stopEmojiRain();
  emojiInterval = setInterval(() => {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 4 + Math.random() * 3 + "s";
    emojiLayer.appendChild(emoji);
    setTimeout(() => emoji.remove(), 7000);
  }, 100);
}

function stopEmojiRain() {
  clearInterval(emojiInterval);
  emojiLayer.innerHTML = "";
}

// Start love emojis on load
startEmojiRain(loveEmojis);

// No button logic
noBtn.addEventListener("click", () => {
  if (noCount === 0) {
    bgMusic.play(); // start romantic song on first NO
  }

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

  stopEmojiRain();
  startEmojiRain(yesEmojis);

  document.querySelector(".container").style.display = "none";
  finalScreen.style.display = "flex";
});
