const inputPrenom = document.getElementById("input-prenom");
let savePrenom = "";
const inputEmail = document.getElementById("input-email");
let saveEmail = "";
const message = document.getElementById("message");
let saveMessage = "";
const formulaireAccueil = document.getElementById("formulaire-accueil");
let erreur;

inputPrenom.addEventListener("input", (e) => {
  savePrenom = e.target.value;
});
inputEmail.addEventListener("input", (e) => {
  saveEmail = e.target.value;
});
message.addEventListener("input", (e) => {
  saveMessage = e.target.value;
});
// document
//   .getElementById("formulaire-accueil")
//   .addEventListener("submit", function (e) {
//     alert("formulaire envoyé!");
//   });
formulaireAccueil.addEventListener("submit", (e) => {
  // annule le changement de page
  e.preventDefault();
});
