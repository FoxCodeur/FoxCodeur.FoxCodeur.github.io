const cursor = document.querySelector(".mouse-move-complexe");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
const allcities = document.querySelectorAll(".city");
allcities.forEach((city) => {
  const location = city.getAttribute("data-lock");
  city.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered");
    cursor.style.backgroundImage = `url(../../images/${location}.jpg)`;
  });
  city.addEventListener("mouseout", () => {
    cursor.classList.remove("hovered");
    cursor.style.backgroundImage = `none`;
  });
});
