//Logan
const target = document.getElementById("target");
let array = ["C'est ce qu'est ton père, Jaq,", "Logan est un tueur !"];
let wordIndex = 0;
let letterIndex = 0;
let textStarted = false;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  if (array[wordIndex][letterIndex] === " ") {
    letter.innerHTML = "&nbsp;";
  } else {
    letter.textContent = array[wordIndex][letterIndex];
  }
  setTimeout(() => {
    letter.remove();
  }, 6000);
};

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      if (wordIndex < array.length) {
        setTimeout(() => {
          loop();
        }, 6000);
      } else {
        textStarted = false;
      }
    }
  }, 100);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 450 && !textStarted) {
    textStarted = true;
    loop();
  }
});
// ------------------------------------------------------------
let t1 = gsap.timeline();
t1.from(".letter-tara", {
  duration: 1,
  opacity: 0,
  stagger: 0.25,
  color: "#D97171",
});
t1.to(".letter-tara-1", {
  duration: 0.3,
  //   delay: 0.5,
  fontSize: "70px",
  x: -100,
  textShadow: "0 5px 8px rgba(255, 242, 0, 0.5)",
});
t1.to(".letter-tara-2", {
  duration: 0.3,
  //   delay: 0.5,
  fontSize: "70px",
  x: -100,
  textShadow: "0 5px 8px rgba(0, 57, 255, 0.5)",
});
t1.to(".letter-tara-3", {
  duration: 0.3,
  //   delay: 0.5,
  fontSize: "70px",
  x: -100,
  textShadow: "0 5px 8px rgba(255, 0, 6, 1)",
});
t1.to(".letter-tara-4", {
  duration: 0.3,
  //   delay: 0.5,
  fontSize: "70px",
  x: -100,
});
t1.to(".letter-tara-4", {
  duration: 0.5,
  //   delay: 0.5,
  fontSize: "70px",
  x: -100,
  textShadow: "0 5px 8px rgba(255, 0, 6, 1)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
t1.to(".ct1", {
  duration: 0.5,
  opacity: 0,
});
t1.to(".ct2", {
  duration: 0.5,
  opacity: 0,
});
t1.to(".ct3", {
  duration: 0.5,
  opacity: 0,
});
t1.to(".ct4", {
  duration: 1,
  opacity: 0,
  textShadow: "0 5px 8px rgba(255, 0, 6, 1)",
  repeat: -1, // Répète l'animation en boucle
  yoyo: true, // Alterne entre les états initial et animé
});
