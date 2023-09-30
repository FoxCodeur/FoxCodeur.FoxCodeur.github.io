function menuMobile() {
  const navbar = document.querySelector(".navbar");
  const btnLexique = document.querySelector(".burger-lexique");
  const burgerLexique = document.querySelector(".burger-lexique");

  btnLexique.addEventListener("click", () => {
    navbar.classList.toggle("show-nav-mobile");
    burgerLexique.classList.toggle("active");
  });
}
menuMobile();
