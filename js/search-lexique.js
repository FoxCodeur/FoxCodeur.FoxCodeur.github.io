const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  // Cette ligne de code crée une variable appelée "searchTerm" et y affecte la valeur de "this.value.toLowerCase()".
  // "this" fait référence à l'élément HTML sur lequel l'événement a été déclenché, en l'occurrence l'input de recherche.
  // ".value" renvoie la valeur actuelle de l'input de recherche, qui correspond au texte entré par l'utilisateur.
  // ".toLowerCase()" est une méthode JavaScript qui convertit une chaîne de caractères en minuscules. Cette méthode est utilisée ici pour normaliser la recherche en convertissant tous les caractères en minuscules.
  const searchTerm = searchInput.value.toLowerCase();
  const results = document.querySelectorAll(".table-results");
  // Ce code est une boucle for qui itère sur tous les éléments HTML stockés dans le tableau results. Pour chaque élément, le contenu textuel est stocké dans la variable resultText et est transformé en minuscules à l'aide de la méthode toLowerCase().
  // Ensuite, une condition est vérifiée pour chaque élément : si la chaîne de caractères searchTerm est incluse dans le texte de l'élément (c'est-à-dire que la recherche correspond à une partie du texte), alors l'élément est affiché avec la propriété CSS display réglée sur "block". Sinon, l'élément est caché avec display réglé sur "none".
  // Ainsi, lorsque l'utilisateur tape une recherche, seuls les éléments contenant le texte correspondant à la recherche sont affichés, tandis que les autres sont masqués.
  for (let i = 0; i < results.length; i++) {
    const resultText = results[i].textContent.toLowerCase();

    if (resultText.includes(searchTerm)) {
      results[i].style.display = "block";
    } else {
      results[i].style.display = "none";
    }
  }
});
