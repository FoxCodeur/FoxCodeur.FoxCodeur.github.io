//Logan
// target: récupère l'élément HTML avec l'id "target", qui est l'endroit où le texte animé sera affiché.
const target = document.getElementById("target");
// array: contient un tableau de phrases qui seront affichées une après l'autre.
let array = [
  "Je n'ai jamais tué personne de ma vie !",
  "Les limiers terminent les fugitifs !",
];
// wordIndex: est l'index pour suivre la phrase actuelle dans le tableau array.
let wordIndex = 0;
// letterIndex: est un index pour suivre la lettre actuelle dans la phrase en cours d'affichage.
let letterIndex = 0;
// textStarted: est un booléen qui indique si l'animation de texte a commencé ou non.
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
