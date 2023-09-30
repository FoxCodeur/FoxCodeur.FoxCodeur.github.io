const phase1 = document.querySelector(".phase1");
const phase2 = document.querySelector(".phase2");
const phase3 = document.querySelector(".phase3");
const phase4 = document.querySelector(".phase4");
const phase5 = document.querySelector(".phase5");
const phase6 = document.querySelector(".phase6");
// Sélectionnez toutes les images dans la classe .affiche-cristal à l'aide de querySelectorAll.
// Convertissez la NodeList résultante en un tableau à l'aide de Array.from().
const phases = Array.from(document.querySelectorAll(".phases"));
phase1.addEventListener("click", () => {
  hideOtherPhases(phase1);
});

phase2.addEventListener("click", () => {
  hideOtherPhases(phase2);
});

phase3.addEventListener("click", () => {
  hideOtherPhases(phase3);
});

phase4.addEventListener("click", () => {
  hideOtherPhases(phase4);
});

phase5.addEventListener("click", () => {
  hideOtherPhases(phase5);
});

phase6.addEventListener("click", () => {
  hideOtherPhases(phase6);
});
function hideOtherPhases(clickedPhase) {
  phases.forEach((phase) => {
    if (phase !== clickedPhase) {
      phase.style.display = "none";
    }
  });
}

// renew button
// code pour recharger la page en cliquant sur le bouton
let btn = document.getElementById("button-adventure-comics");
btn.addEventListener("click", function () {
  location.reload();
});
