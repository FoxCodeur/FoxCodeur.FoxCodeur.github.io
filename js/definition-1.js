/*----------------------------- A----------------------------- */

/*----------------------------- A----------------------------- */

/*----------------------------- B----------------------------- */

/*----------------------------- C----------------------------- */
//Charming Billy
const target = document.getElementById("target");
let array = [
  "Billy, quel âge as-tu ?",
  "14 ans, 15 peut-être !",
  "Le temps passe vite, ici !",
  "tu sais Billy,",
  "Aucun louveteau",
  "ne devient loup !",
];
let wordIndex = 0;
let letterIndex = 0;
let textStarted = false;

const createLetter = () => {
  const letter = document.createElement("target2");
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
/*----------------------------- D----------------------------- */

/*----------------------------- E----------------------------- */

/*----------------------------- F----------------------------- */

/*----------------------------- G----------------------------- */

/*----------------------------- H----------------------------- */

/*----------------------------- I----------------------------- */

/*----------------------------- J----------------------------- */

/*----------------------------- K----------------------------- */

/*----------------------------- L----------------------------- */

/*----------------------------- M----------------------------- */

/*-------------Les machines------------- */
const buttonAndroid = document.getElementById("button-android");
const armMachineRotate = document.querySelector(".arm-machine-rotate");
const androidAvantBras = document.querySelector(".android-avant-bras");
const androidColonneVertebrale = document.querySelector(
  ".android-colonne-vertebrale"
);
const wagon = document.querySelector(".wagon");
const moveSound = () => {
  const audio = new Audio();
  audio.src = "wagon.mp3";
  audio.play();
};
buttonAndroid.addEventListener("click", () => {
  androidAvantBras.classList.toggle("arm-machine-rotate");
  androidColonneVertebrale.classList.add("android-colonne-vertebrale-rouge");
});
wagon.addEventListener("mouseover", () => {
  moveSound();
});
