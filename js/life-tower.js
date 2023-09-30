clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //   on calcule le placement de l'aiguille des heures en degre ex:12*30=360deg ce qui donne 12H ou minuit
  const hour = hours * 30;
  //   on calcule le placement de l'aiguille des minute en degre ex:30*6=180deg ce qui donne 12H30
  const minute = minutes * 6;
  const second = seconds * 6;

  document.querySelector(".heure").style.transform = `rotate(${hour}deg)`;

  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;

  document.querySelector(".seconde").style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);

