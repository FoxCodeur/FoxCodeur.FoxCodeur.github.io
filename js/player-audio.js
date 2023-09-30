const titre = document.querySelector(".track-name");
const precedent = document.querySelector(".prev-track");
const suivant = document.querySelector(".next-track");
const play = document.querySelector(".playpause-track");
const audio = document.querySelector("audio");

// let curseurDeRecherche = document.querySelector(".seek_slider");
// let curseurDuVolume = document.querySelector(".volume_slider");
// let curr_time = document.querySelector(".current-time");
// let dureeTotaleDuTitre = document.querySelector(".total-duration");

let updateTimer; //mise à jour minuterie
let musiquePlay = false;
// let i = 0; //index des pistes audio

const liste = [
  {
    src: "../../sons/cubs.mp3",
    nom: "Cubs",
  },
  {
    src: "../../sons/Terminated_in_Cathedral.mp3",
    nom: "Terminated in Cathedral",
  },
];

function playMusique() {
  musiquePlay = true;
  audio.play();
  play.classList.add("active");
  play.innerHTML = `<i class="fa fa-play-circle fa-5x"></i>`;
}
function pauseMusique() {
  musiquePlay = false;
  audio.pause();
  play.classList.remove("active");
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

play.addEventListener("click", () => {
  musiquePlay ? pauseMusique() : playMusique();
});

function loadMusic(liste) {
  titre.textContent = liste.nom;
  audio.src = liste.src;
}

let i = 1; //index des pistes audio
loadMusic(liste[i]);

function retourMusique() {
  i--;
  if (i < 0) {
    i = liste.length - 1;
  }
  loadMusic(liste[i]);
  playMusique;
}
precedent.addEventListener("click", retourMusique);

function suivantMusique() {
  i++;
  if (i > 0) {
    i = liste.length - 1;
  }
  loadMusic(liste[i]);
  playMusique;
}
suivant.addEventListener("click", suivantMusique);
