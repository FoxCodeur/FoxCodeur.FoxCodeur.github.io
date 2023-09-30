//variable mousemove
const cursor = document.querySelector(".cursor");
const mouseUn = document.querySelector(".mouse1");
const mouseDeux = document.querySelector(".mouse2");

// recuperer le bouton avec l'id "btn"
let btn = document.getElementById("btn_new");
btn.addEventListener("click", shuffle);
let sandman = 0;

shuffle();

function shuffle() {
  let allcards = document.getElementsByClassName("card-img");
  allcards[sandman].setAttribute("src", "images/cards/2_de_bleu.png");
  let random = Math.floor(Math.random() * allcards.length); // un nombre au hasard
  let card = allcards[random];
  card.setAttribute("src", "images/cards/logan_sandman_king.png");
  sandman = random;
}

// event = évènement qui va déclencher le flip de la carte
function flip(event) {
  let element = event.currentTarget;
  if (element.className === "card") {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}

// mousemove
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  mouseUn.style.left = e.pageX + "px";
  mouseUn.style.top = e.pageY + "px";
  mouseDeux.style.left = e.pageX + "px";
  mouseDeux.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  cursor.style.background = "red";
});
window.addEventListener("mouseup", () => {
  cursor.style.background = "white";
});
