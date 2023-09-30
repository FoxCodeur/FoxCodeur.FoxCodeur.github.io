//Logan
const target = document.getElementById("target");
let array = [
  "Pourquoi c'est mal de fuir ?",
  "Il ne faut pas y penser Jessica,",
  "et à plus forte raison en parler !",
];
let wordIndex = 0;
let letterIndex = 0;
let textStarted = false;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  if (array[wordIndex][letterIndex] === " ") {
    letter.innerHTML = "&nbsp;";
  } else {
    letter.textContent = array[wordIndex][letterIndex];
  }
  setTimeout(() => {
    letter.remove();
  }, 6000);
};

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      if (wordIndex < array.length) {
        setTimeout(() => {
          loop();
        }, 6000);
      } else {
        textStarted = false;
      }
    }
  }, 100);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 450 && !textStarted) {
    textStarted = true;
    loop();
  }
});
