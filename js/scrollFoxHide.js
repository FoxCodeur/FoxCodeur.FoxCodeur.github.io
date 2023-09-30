const hideFox = document.querySelector(".FoxBox");
const appearFox = document.querySelector(".FoxBox2");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    hideFox.classList.add("hidden");
    appearFox.classList.add("hidden");
  } else {
    hideFox.classList.add("hidden");
    appearFox.classList.remove("hidden");
  }

  lastScroll = window.scrollY;
});
