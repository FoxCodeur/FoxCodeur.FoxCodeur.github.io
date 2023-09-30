// récupérer les éléments du DOM
// prendre chaque élément de la Node list pour la placer dans un tableau
let cases = [...document.querySelectorAll(".case-fgame")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

//Créer le STATE ou objet qui va contenir toutes les informations importantes du jeu
let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNuls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};
const resetState = () => {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};
const verifierVictoire = () => {
  if (
    (state.c1 === state.c2 && state.c2 === state.c3 && state.c1 > 0) ||
    (state.c4 === state.c5 && state.c5 === state.c6 && state.c4 > 0) ||
    (state.c7 === state.c8 && state.c8 === state.c9 && state.c7 > 0) ||
    (state.c1 === state.c4 && state.c4 === state.c7 && state.c1 > 0) ||
    (state.c2 === state.c5 && state.c5 === state.c8 && state.c2 > 0) ||
    (state.c3 === state.c6 && state.c6 === state.c9 && state.c3 > 0) ||
    (state.c1 === state.c5 && state.c5 === state.c9 && state.c1 > 0) ||
    (state.c3 === state.c5 && state.c5 === state.c7 && state.c3 > 0)
  ) {
    // Code à exécuter si la condition est vraie
    return true;
  } else if (
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouerCase = (e) => {
  let idCase = e.target.id;
  //étape 2 Tout d'abord on vérifie que la case n'a pas été joué
  if (state[idCase] !== 0) return;
  state[idCase] = state.joueurEnCours;

  let isVictoire = verifierVictoire();
  if (isVictoire === true) {
    alert("Le gagnant est le joueur" + state.joueurEnCours);
    if (state.joueurEnCours == 1) {
      state.scoreJ1++;
      score1.textContent = state.scoreJ1;
    } else {
      state.scoreJ2++;
      score2.textContent = state.scoreJ2;
    }
    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === null) {
    alert("match nul!");
    state.matchNuls++;
    scoreNul.textContent = state.matchNuls;
    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === false) {
    if (state.joueurEnCours === 1) {
      e.target.innerHTML = e.target.innerHTML =
        '<img src="../../images/tic-tac-toe/luke-game.png" alt="X" style="max-width: 80px; display: flex;">';
      state.joueurEnCours = 2;
      joueur.textContent = "2";
    } else {
      e.target.innerHTML = e.target.innerHTML =
        '<img src="../../images/tic-tac-toe/runner-game.png" alt="X" style="max-width: 80px; display: flex;">';
      state.joueurEnCours = 1;
      joueur.textContent = "1";
    }
  }
};
// étape 1 Avec la méthode forEach, sur caque case cliqué j'appelle la fonction jouer case
cases.forEach((element) => {
  element.addEventListener("click", jouerCase);
});
