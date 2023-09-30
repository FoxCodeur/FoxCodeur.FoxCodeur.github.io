// Tout d'abord, deux sélecteurs sont définis avec document.querySelectorAll() pour récupérer toutes les images de fond (bgImages) et tous les boutons (allButtons) qui sont utilisés dans la navigation.
const bgImages = document.querySelectorAll(".perso-protagonistes-bg img");
const allButtons = document.querySelectorAll(".button-characters");
//  Lorsqu'un bouton est cliqué, la fonction hideAllBackgrounds() est appelée pour masquer toutes les images de fond
allButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    hideAllBackgrounds();
    bgImages[index].style.display = "flex";
    allButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});

function hideAllBackgrounds() {
  bgImages.forEach((bgImage) => (bgImage.style.display = "none"));
}

// Deuxième méthode
// const bgImages = document.querySelectorAll(".perso-protagonistes-bg img");
// const allButtons = document.querySelectorAll(".button-characters");
// let selectedCharacter = "default"; // Valeur par défaut de la variable

// allButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     selectedCharacter = button.getAttribute("data-character"); // Récupérer la valeur de l'attribut "data-character" du bouton cliqué
//     hideAllBackgrounds();
//     showSelectedBackground();
//     allButtons.forEach((b) => b.classList.remove("active"));
//     button.classList.add("active");
//   });
// });

// function hideAllBackgrounds() {
//   bgImages.forEach((bgImage) => (bgImage.style.display = "none"));
// }

// function showSelectedBackground() {
//   if (selectedCharacter === "character1") {
//     bgImages[0].style.display = "flex";
//   } else if (selectedCharacter === "character2") {
//     bgImages[1].style.display = "flex";
//   } else if (selectedCharacter === "character3") {
//     bgImages[2].style.display = "flex";
//   } else {
//     bgImages[3].style.display = "flex"; // Valeur par défaut si la variable ne correspond à aucun des cas précédents
//   }
// }
