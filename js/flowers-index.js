let flowers = gsap.timeline();
flowers.to(".blinking-flower", {
  duration: 1,
  opacity: 0,
  // dropShadow
  boxShadow: "0 5px 8px rgba(255, 0, 6, 1)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
// --------------------------------------------------------
