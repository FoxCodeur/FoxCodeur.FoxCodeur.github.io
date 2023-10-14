const modeSombre = {
  containerDuModeSombre: null, // Variable pour stocker une référence
  // à la zone sombre

  // méthode init pour initialiser le module
  init: function () {
    console.log('modeSombre : init');

    // on ajoute les différents écouteurs d'événement
    const bouton = document.querySelector(".dark-themeBtn");
    bouton.addEventListener("click", modeSombre.handleShow);

    // Assurez-vous d'obtenir une référence à la zone sombre
    modeSombre.containerDuModeSombre = document.querySelector(".darkZoneContain");
    const isDarkmodeActivated = localStorage.getItem("darktheme");
    if(isDarkmodeActivated==="true"){
      modeSombre.containerDuModeSombre.classList.add("dark-mode");
  }
  },

  handleShow: function () {
    // Utilisez la référence à la zone sombre pour basculer la classe
    modeSombre.containerDuModeSombre.classList.toggle("dark-mode");
    if (modeSombre.containerDuModeSombre.classList.contains("dark-mode") ) {
      // enregistrer la valeur dans le storage clé+valeur
      localStorage.setItem("darktheme","true");
    } else{
      localStorage.setItem("darktheme","false");
    }
  }
}
// const darkModeButton = document.querySelector(".dark-themeBtn");

// darkModeButton.addEventListener("click", () => {
//   const darkZone = document.querySelector(".darkZoneContain");
// console.log('click');
//   darkZone.classList.toggle("dark-mode");
// });