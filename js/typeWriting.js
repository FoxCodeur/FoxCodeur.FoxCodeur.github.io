const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim, {
  deleteSpeed: 20,
})
  .typeString("La carte limier gagne et les cartes 9 et 6 perdent. ")
  .pauseFor(300)
  .start();
