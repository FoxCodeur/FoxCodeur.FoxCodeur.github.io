// bouton qui monte
const upToTheTop = document.querySelector("#upSite");
upToTheTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    upToTheTop.classList.add("btn-appear");
  }
});
