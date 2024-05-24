let image_slider = document.querySelectorAll(".image_slider");
// On crée une variable de la première image, la zéro en partant du haut du tableau
let etape = 0;

// le nombre d'image total (10)
let nb_image = image_slider.length;
// fonction qui enlève la classe active sur toutes les images.
function enleverActiveImage() {
  for (let i = 0; i < nb_image; i++) image_slider[i].classList.remove("active");
}
// ----------------------------------------------------------------------------
let suivant = document.querySelector(".suivant");
suivant.addEventListener("click", handleClickButtonNextImage);
function handleClickButtonNextImage() {
  etape++;
  if (etape >= nb_image) {
    etape = 0;
  }
  enleverActiveImage();
  image_slider[etape].classList.add("active");
}

// ----------------------------------------------------------------------------
let precedent = document.querySelector(".precedent");
precedent.addEventListener("click", handleClickButtonPrevImage);
function handleClickButtonPrevImage() {
  etape--;
  if (etape < 0) {
    etape = nb_image - 1;
  }
  enleverActiveImage();
  image_slider[etape].classList.add("active");
}

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
