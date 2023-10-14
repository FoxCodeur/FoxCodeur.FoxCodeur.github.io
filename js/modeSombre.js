const modeSombre = {
  containerDuModeSombre: null, // Variable pour stocker une référence
  // à la zone sombre

  // méthode init pour initialiser le module
  init: function () {
    console.log('modeSombre : init');

    // on ajoute les différents écouteurs d'événement
    const darkModeButton = document.querySelector(".dark-themeBtn");
    darkModeButton.addEventListener("click", modeSombre.handleShow);

    // Assurez-vous d'obtenir une référence à la zone sombre
    modeSombre.containerDuModeSombre = document.querySelector(".darkZoneContain");
  },

  handleShow: function () {
    // Utilisez la référence à la zone sombre pour basculer la classe
    if (modeSombre.containerDuModeSombre) {
      modeSombre.containerDuModeSombre.classList.toggle("dark-mode");
    }
  }
}
// const darkModeButton = document.querySelector(".dark-themeBtn");

// darkModeButton.addEventListener("click", () => {
//   const darkZone = document.querySelector(".darkZoneContain");
// console.log('click');
//   darkZone.classList.toggle("dark-mode");
// });