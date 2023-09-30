let francis = gsap.timeline();
francis.from(".letter-francis", {
  duration: 1,
  opacity: 0,
  stagger: 0.25,
  color: "#D97171",
});
// Animation de disparition des lettres une à une
francis.to(".letter-francis", {
  duration: 0.5,
  opacity: 0,
  stagger: 0.25,
  delay: 0.5, // Délai d'une seconde avant de commencer la disparition
});
francis.from(".letter-ballard", {
  y: 20,
  duration: 3,
  opacity: 0,
});

francis.to(".ballard-1", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(255, 0, 6, 1)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});

francis.to(".ballard-7", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(255, 0, 6, 1)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
francis.to(".ballard-2", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(255, 242, 0, 0.5)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});

francis.to(".ballard-6", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(255, 242, 0, 0.5)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
francis.to(".ballard-3", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(0, 57, 255, 0.5)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});

francis.to(".ballard-5", {
  duration: 0.5,
  textShadow: "0 5px 8px rgba(0, 57, 255, 0.5)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
