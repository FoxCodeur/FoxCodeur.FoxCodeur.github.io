const containerFox = document.querySelector(".fox-container");
const progressFox = document.querySelector(".fox-container-circle");

containerFox.addEventListener("click", () => {
  progressFox.classList.toggle("barfox-visible");
});
