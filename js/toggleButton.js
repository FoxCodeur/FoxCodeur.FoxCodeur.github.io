
let buttonMoveRight = document.querySelector(".toggle");
let textToggle = document.querySelector(".text-toggle");

buttonMoveRight.addEventListener("click", animatedToggle);

function animatedToggle() {
  buttonMoveRight.classList.toggle("active");
  if (buttonMoveRight.classList.contains("active")) {
    textToggle.innerHTML = "ON";
  } else {
    textToggle.innerHTML = "OFF";
  }
}
  
    
  
