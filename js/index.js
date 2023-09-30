// On crée l'élément a
const lienLireSuiteLoganMiddle = document.createElement("a");
// Cibler et nommer la variable du paragraphe située juste en dessous des trois Logan
const lesParagraphesLoganMiddle =
  document.querySelectorAll(".par-logan-middle");
// On ajoute attribut href et dieze
lienLireSuiteLoganMiddle.setAttribute("href", "#1");
// On ajoute une classe lien à l'élément a href pour pouvoir ensuite le modifier via le CSS.
lienLireSuiteLoganMiddle.setAttribute("class", "lienLoganMiddle");
// On injecte du texte à l'élément a href
lienLireSuiteLoganMiddle.innerHTML = "En savoir plus";

lesParagraphesLoganMiddle[0].appendChild(lienLireSuiteLoganMiddle);

function hideText() {
  for (let i = 0; i < lesParagraphesLoganMiddle.length; i++) {
    if (i === 0) {
      continue;
    } else if (i >= 1) {
      lesParagraphesLoganMiddle[i].style.display = "none";
    }
  }
}
hideText();
function appearText() {
  for (let i = 0; i < lesParagraphesLoganMiddle.length; i++) {
    lesParagraphesLoganMiddle[i].style.display = "block";
  }
  // faire disparaitre le lien
  //lienLireSuite.remove
  this.remove();
}
lienLireSuiteLoganMiddle.addEventListener("click", appearText);
