// x: 100 y:100 rotation: 360 scale: 2 skew: 15 en degré, delay: on retarde l'animation
// scaleX scaleY skewX skewY rotation or rotationX Y delay and repeat
//repeat: 1, yoyo: true, repeat: -1, à l'infini
//ease: "bounce.inOut" "linear" "elastic" "back(6)"
let ngc = gsap.timeline();
ngc.to(".imgNGC2", {
  rotation: 360,
  duration: 2,
  repeat: -1, // Répétition infinie
});
//stagger: 0.5, exemple de plusieurs élément ayant la même classe. stagger correspond au délai entre chaque animations.
//stagger: {each:1}
//stagger: {amount:1}
//stagger: {each:0.2, from:"end"} du dernier élément jusqu'au premier
//stagger: {each:0.2, from:"center"} l'animation débute à partir du centre
ngc.from(".ngcText2", {
  y: 100,
  opacity: 0,
  duration: 3,
  delay: 1, // Ajout d'un délai de 2 seconde pour l'animation ".letter-ngc"
  ease: "back(3)",
});

ngc.from(
  ".letter-ngc",
  {
    opacity: 0,
    stagger: 0.2,
  },
  0 // Animation ".letter-ngc" commence 0.5 seconde après le début de la timeline
);
