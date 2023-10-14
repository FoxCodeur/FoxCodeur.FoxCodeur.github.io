//* module app.js : le module "principal" de notre application
const apps = {
    // méthode init() : initialise le module app et toute l'application
    init: function() {
        // pour debug
        console.log("app : init");

        // quand l'application s'initialise, on initialise tous nos autres modules !
        modeSombre.init();
        
    },

};
document.addEventListener('DOMContentLoaded', apps.init);
