function menuMobile() {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".burger");
  const burger = document.querySelector(".burger");

  btn.addEventListener("click", () => {
    navbar.classList.toggle("show-nav-mobile");
    burger.classList.toggle("active");
  });
}
menuMobile();
