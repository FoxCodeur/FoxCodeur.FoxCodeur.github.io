let image_slider = document.querySelectorAll(".image_slider");
// On crée une variable de la première image, la zéro en partant du haut du tableau
let etape = 0;
let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");
// le nombre d'image total (10)
let nb_image = image_slider.length;
// fonction qui enlève la classe active sur toutes les images.
function enleverActiveImage() {
  for (let i = 0; i < nb_image; i++) image_slider[i].classList.remove("active");
}
suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nb_image) {
    etape = 0;
  }
  enleverActiveImage();
  image_slider[etape].classList.add("active");
});
precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nb_image - 1;
  }
  enleverActiveImage();
  image_slider[etape].classList.add("active");
});

// --------------------------------------------------------------------------
// sur click suivant et precedent on entend le son d'un cliché d'appareil photo
const cliches = document.querySelectorAll(".cliche");
const clicheSound = () => {
  const audio = new Audio();
  audio.src = "../../sons/cliche.mp3";
  audio.play();
};
cliches.forEach((cliche) => {
  cliche.addEventListener("click", () => {
    clicheSound();
  });
});

// setInterval(() => {
//   etape++;
//   if (etape >= nb_image) {
//     etape = 0;
//   }
//   enleverActiveImage();
//   image_slider[etape].classList.add("active");
// }, 3000);
