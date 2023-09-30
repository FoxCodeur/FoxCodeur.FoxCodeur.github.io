let carteReturned = false;
let premiereCarte, secondeCarte;
// -----------------------------------------------------
// code pour recharger la page en cliquant sur le bouton
let btn = document.getElementById("bouton-game-doyle");
btn.addEventListener("click", function () {
  location.reload();
});
// -----------------------------------------------------
//1. On crée la variable carte
const cards = document.querySelectorAll(".memory-card");
// -----------------------------------------------------
// 2. Avec la méthode foreach on sélectionne l'ensemble des carte auxquelles on ajoute un évènement
cards.forEach((card) => {
  // lorsqu'on clique sur une des cartes la fonction flipcard se déclenche
  card.addEventListener("click", flipcard);
});
// ------------------------------------------------------
function flipcard() {
  this.classList.add("flip");

  if (!carteReturned) {
    // premier click
    carteReturned = true;
    premiereCarte = this;
    // console.log({ carteReturned, premiereCarte });
    return;
    // le return permet de ne pas écrire de else
  }
  // deuxième click
  carteReturned = false;
  secondeCarte = this;
  // console.log({ premiereCarte, secondeCarte });
  // 3. match card
  // console.log(premiereCarte.dataset.image);
  // console.log(secondeCarte.dataset.image);
  chercherDuoCartesIdentiques();
}
// ----------------------------------------------------

// -----------------------------------------------------
// fonction incluse dans la fonction flipcard
function chercherDuoCartesIdentiques() {
  let cartesIdentiques =
    premiereCarte.dataset.image === secondeCarte.dataset.image;

  cartesIdentiques ? desactiverCartesPaires() : bloquerRotationImages();
}
// -----------------------------------------------------
// Les deux fonctions incluses dans la fonction chercherDuoCartesIdentiques
function desactiverCartesPaires() {
  // Lorsques les cartes sont identiques, on empêche qu'elles se retournent.
  premiereCarte.removeEventListener("click", flipcard);
  secondeCarte.removeEventListener("click", flipcard);
  // Ajouter une classe CSS pour mettre en évidence les cartes identiques
  premiereCarte.classList.add("matched");
  secondeCarte.classList.add("matched");

  // Ajouter un compteur et vérifier si toutes les paires ont été trouvées
  let pairesTrouvees = 0;
  const nombreTotalDePaires = cards.length;
  cards.forEach((card) => {
    if (card.classList.contains("matched")) {
      pairesTrouvees++;
    }
  });
  if (pairesTrouvees === nombreTotalDePaires) {
    // Faire disparaître toutes les cartes
    cards.forEach((card) => {
      card.style.display = "none";
    });
    // Afficher la grande image dans la section de jeu
    const grandeImage = document.createElement("img");
    grandeImage.src = "../../images/youwin.png";
    grandeImage.style.width = "100%";
    grandeImage.style.height = "auto";
    const sectionDeJeu = document.querySelector(".game");
    sectionDeJeu.appendChild(grandeImage);
  }

  //---------------------------------------------------
}
function bloquerRotationImages() {
  setTimeout(() => {
    premiereCarte.classList.remove("flip");
    secondeCarte.classList.remove("flip");
  }, 1500);
}

// dernière étape, écrire la fonction shuffle
(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();
