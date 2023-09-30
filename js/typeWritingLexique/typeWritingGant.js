//Gant
const target = document.getElementById("target");
let array = [
  "Personne n'a jamais le temps de rien, Logan !",
  "Sauf peut-être toi !",
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
  if (window.scrollY > 600 && !textStarted) {
    textStarted = true;
    loop();
  }
});
