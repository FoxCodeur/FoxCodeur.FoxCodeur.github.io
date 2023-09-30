const pisteur = gsap.timeline();

const boutonMission = document.getElementById("btn1Mission");
const boutonHautMission = document.querySelector(".redBtn1");

boutonMission.addEventListener("click", () => {
  // Rendre les éléments visibles avant l'animation
  gsap.set(".doyle-gps, .text-tracker-middle", { visibility: "visible" });

  pisteur.to(".doyle-gps", {
    opacity: 0,
    duration: 1,
    delay: 2,
  });
  pisteur.from(".text-tracker-middle", {
    opacity: 0,
    duration: 1,
  });

  boutonHautMission.classList.add("move-right");
});
