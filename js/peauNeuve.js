const allLetters = document.querySelectorAll(".all-letters");
const line = document.getElementsByClassName("ligne-peau-neuve");
// code pour recharger la page en cliquant sur le bouton
let btn = document.getElementById("bouton-newYou");
btn.addEventListener("click", function () {
  location.reload();
});

const TimelineLetter = gsap.timeline();

TimelineLetter.from(line, {
  width: "0%",
  opacity: 0,
  duration: 0.7,
  ease: "power1.in",
}).from(allLetters, {
  opacity: 0,
  top: gsap.utils.wrap([100, -100]),
  stagger: 0.1,
  ease: "power2.out",
});
