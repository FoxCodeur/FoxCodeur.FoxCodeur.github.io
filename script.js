// 1. Déclaration des variables pour les éléments du curseur
const cursor = document.querySelector(".cursor");
const mouseUn = document.querySelector(".mouse1");
const mouseDeux = document.querySelector(".mouse2");

// 2. Récupération du bouton avec l'ID "btn_new"
let btn = document.getElementById("btn_new");

// 3. Ajout d'un écouteur d'événements pour le clic sur le bouton, déclenchant la fonction shuffle
btn.addEventListener("click", shuffle);

// 4. Initialisation d'une variable sandman
let sandman = 0;

// 5. Appel de la fonction shuffle dès le chargement de la page
shuffle();

// 6. Définition de la fonction shuffle, responsable du mélange des cartes
function shuffle() {
  // 7. Récupération de toutes les cartes par leur classe
  let allcards = document.getElementsByClassName("card-img");

  // 8. Réinitialisation de l'image de la carte précédente à sa forme initiale
  allcards[sandman].setAttribute("src", "images/cards/2_de_bleu.png");

  // 9. Génération d'un nombre aléatoire pour choisir une nouvelle carte
  let random = Math.floor(Math.random() * allcards.length);

  // 10. Sélection de la carte aléatoire
  let card = allcards[random];

  // 11. Modification de l'image de la carte choisie aléatoirement
  card.setAttribute("src", "images/cards/logan_sandman_king.png");

  // 12. Mise à jour de la variable sandman avec l'index de la nouvelle carte sélectionnée
  sandman = random;
}

// 13. Définition de la fonction flip, déclenchée lorsqu'une carte est cliquée
function flip(event) {
  // 14. Récupération de l'élément sur lequel l'événement de clic a été déclenché
  let element = event.currentTarget;

  // 15. Vérification si l'élément est une carte
  if (element.className === "card") {
    // 16. Rotation de la carte si elle est face visible ou cachée
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}

// 17. Gestion du mouvement de la souris
window.addEventListener("mousemove", (e) => {
  // 18. Positionnement des éléments du curseur en fonction de la position de la souris
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  mouseUn.style.left = e.pageX + "px";
  mouseUn.style.top = e.pageY + "px";
  mouseDeux.style.left = e.pageX + "px";
  mouseDeux.style.top = e.pageY + "px";
});

// 19. Changement de couleur du curseur lorsqu'un bouton de la souris est enfoncé
window.addEventListener("mousedown", () => {
  cursor.style.background = "red";
});

// 20. Retour à la couleur par défaut du curseur lorsqu'un bouton de la souris est relâché
window.addEventListener("mouseup", () => {
  cursor.style.background = "white";
});
