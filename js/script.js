const yesButton = document.querySelector(".yes");
yesButton.addEventListener("click", () => {
  window.location.replace("page/Yes.html");  // No leading slash
});

const words = [
  "Ayaw?",
  "Are You Sure?",
  "Sure na Sure na?",
  "Ako lng dapat!",
  "Think Again!",
  "Bakit ayaw mo?",
  "Talaga?, Ako na to!"
];
const stickers = [
  "https://media.tenor.com/qqRoBpnjOrIAAAAj/tkthao219-bubududu.gif",
  "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif",
  "https://media.tenor.com/yZoKXA08ZyYAAAAi/bubu-bubu-dudu.gif",
  "https://media1.tenor.com/m/cpn_JxG5OHUAAAAC/kitty-hurting.gif"
];

document.querySelector(".no").addEventListener("click", () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

  document.getElementById("randomWord").innerText = randomWord;
  document.getElementById("sticker").src = randomSticker;
  document.getElementById("sticker").alt = "Random Valentine Sticker";
  document.getElementById("sticker").style.display = "block";
  document.getElementById("popup").style.display = "block";
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
