const boiteUn = document.querySelector(".b1");
const boiteDeux = document.querySelector(".b2");
const boiteTrois = document.querySelector(".b3");
const boiteQuatre = document.querySelector(".b4");
const boiteCinq = document.querySelector(".b5");
const boiteSix = document.querySelector(".b6");
const boiteSept = document.querySelector(".b7");
const boiteHuit = document.querySelector(".b8");
const orbered1 = document.querySelector(".orbered1");
const orbered2 = document.querySelector(".orbered2");
const orbered3 = document.querySelector(".orbered3");
const orbered4 = document.querySelector(".orbered4");
const orbered5 = document.querySelector(".orbered5");
const orbered6 = document.querySelector(".orbered6");
const orbered7 = document.querySelector(".orbered7");
const orbered8 = document.querySelector(".orbered8");
const redLine = document.querySelector(".barre-timeline");
const redLine2 = document.querySelector(".barre-timeline2");
const redLine3 = document.querySelector(".barre-timeline3");
const redLine4 = document.querySelector(".barre-timeline4");
const redLine5 = document.querySelector(".barre-timeline5");
const redLine6 = document.querySelector(".barre-timeline6");
const redLine7 = document.querySelector(".barre-timeline7");

let scrollValue =
  (window.scrollY + window.innerHeight) / document.body.offsetHeight;

let lastScroll = 0;
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    boiteUn.classList.add("b11");
  } else if (window.scrollY < lastScroll) {
    boiteUn.classList.remove("b11");
  }
  lastScroll = window.scrollY;
});

// --------------------------------------

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    boiteDeux.classList.add("b22");
    orbered2.classList.add("orbered22");
    redLine.classList.add("barre-timeline-active");
  } else if (window.scrollY < 450) {
    boiteDeux.classList.remove("b22");
  }
});

// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 750) {
    boiteTrois.classList.add("b33");
    orbered3.classList.add("orbered33");
    redLine.classList.add("barre-timeline2-active");
  } else if (window.scrollY < 750) {
    boiteTrois.classList.remove("b33");
  }
});
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 1200) {
    boiteQuatre.classList.add("b44");
    orbered4.classList.add("orbered44");
    redLine.classList.add("barre-timeline3-active");
  } else if (window.scrollY < 1200) {
    boiteQuatre.classList.remove("b44");
  }
});
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 1700) {
    boiteCinq.classList.add("b55");
    orbered5.classList.add("orbered55");
    redLine.classList.add("barre-timeline4-active");
  } else if (window.scrollY < 1700) {
    boiteCinq.classList.remove("b55");
  }
});
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 2000) {
    boiteSix.classList.add("b66");
    orbered6.classList.add("orbered66");
    redLine.classList.add("barre-timeline5-active");
  } else if (window.scrollY < 2000) {
    boiteSix.classList.remove("b66");
  }
});
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 2400) {
    boiteSept.classList.add("b77");
    orbered7.classList.add("orbered77");
    redLine.classList.add("barre-timeline6-active");
  } else if (window.scrollY < 2400) {
    boiteSept.classList.remove("b77");
  }
});
// --------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 2800) {
    boiteHuit.classList.add("b88");
    orbered8.classList.add("orbered88");
    redLine.classList.add("barre-timeline7-active");
  } else if (window.scrollY < 2900) {
    boiteHuit.classList.remove("b88");
  }
});
// valeur globale de l'écran en px qui augmente en fonction de la taille de l'écran
// console.log(document.body.offsetHeight);
// calcul de pourcentage en fonction du scroll
//window.innerHeight  Récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale.
// console.log((window.scrollY+window.innerHeight)/document.body.offsetHeight);

// Faire apparaître paragraphe en dessous de La Terre, un jour, décida d'être jeune.
const lienLireSuite = document.createElement("a");
const lesParagraphes = document.querySelectorAll(".par");
lienLireSuite.setAttribute("href", "#");
lienLireSuite.setAttribute("class", "lien");
lienLireSuite.innerHTML = "En savoir plus";
lesParagraphes[0].appendChild(lienLireSuite);

function hideText() {
  for (let i = 0; i < lesParagraphes.length; i++) {
    if (i === 0) {
      continue;
    } else if (i >= 1) {
      lesParagraphes[i].style.display = "none";
    }
  }
}
hideText();

function appearText() {
  for (let i = 0; i < lesParagraphes.length; i++) {
    lesParagraphes[i].style.display = "block";
  }
  // faire disparaitre le lien
  //lienLireSuite.remove
  this.remove();
}
lienLireSuite.addEventListener("click", appearText);
console.log(lesParagraphes);
