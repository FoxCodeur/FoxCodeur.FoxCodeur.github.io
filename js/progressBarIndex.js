// window.innerHeight Récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale.
// element.scrollHeight est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran. La valeur scrollHeight est égale à la hauteur minimum dont l'élément aurait besoin pour que le contenu rentre dans le viewpoint sans utiliser de barre de défilement. Cela inclut les marges internes mais pas les marges externes.
const progressBar = document.querySelector(".progress-bar");
progressBar.style.display = "none";
// fonction
let handleScroll = () => {
  progressBar.style.display = "block";
  progressBar.style.borderRadius = "10px";
  //   Variable qui définit la taille du site (10538px)
  const height = document.body.scrollHeight;
  //   Variable qui définit la taille du navigateur (714px)
  const windowHeight = window.innerHeight;
  //   position au scroll en temps réel
  const position = window.pageYOffset;
  //   taille du site moins la partie à afficher
  const trackHauteur = height - windowHeight;
  //   pour arrondir on utilise la fonction math.floor
  const percentage = Math.floor((position / trackHauteur) * 100);
  progressBar.style.right = 100 - percentage + "%";
  // Calculer la couleur en fonction de la progression
  //  optionnel
  const red = 255 - Math.floor((percentage * 255) / 100);
  const green = 0;
  const blue = 0;
  const color = `rgb(${red}, ${green}, ${blue})`;
  // Mettre à jour la couleur de fond de la barre
  progressBar.style.backgroundColor = color;
  progressBar.style.right = 100 - percentage + "%";
};
//détection du scroll
window.addEventListener("scroll", handleScroll);
