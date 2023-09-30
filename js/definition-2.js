/*----------------------------- N----------------------------- */
/*----------------------------- O----------------------------- */

/*----------------------------- P----------------------------- */

/*----------------------------- Q----------------------------- */

/*----------------------------- R----------------------------- */
// revolver limier-----------------------------------------------
const containerMenuMunitions = document.querySelector(
  ".container-menu-munitions"
);
const btnMainMenu = document.querySelector(".btn-main-menu");
btnMainMenu.addEventListener("click", () => {
  containerMenuMunitions.classList.toggle("active");
});
// munitions limier
// const bullets=document.getElementsByClassName(".bullet");
// bullets.forEach((bullet) => {
//   bullet.addEventListener("click",()=>{
//   })
// });
// on peut aussi utiliser querySelectorAll
const blob1=document.querySelector(".blob1");
const bullet1=document.querySelector(".bullet1");
const blob2=document.querySelector(".blob2");
const bullet2=document.querySelector(".bullet2");
const blob3=document.querySelector(".blob3");
const bullet3=document.querySelector(".bullet3");
const blob4=document.querySelector(".blob4");
const bullet4=document.querySelector(".bullet4");
const blob5=document.querySelector(".blob5");
const bullet5=document.querySelector(".bullet5");
const blob6=document.querySelector(".blob6");
const bullet6=document.querySelector(".bullet6");

blob1.addEventListener("click", () =>{
  bullet1.classList.toggle("bullet-visible-tangler");
});
blob2.addEventListener("click", () =>{
  bullet2.classList.toggle("bullet-visible-nitro");
});
blob3.addEventListener("click", () =>{
  bullet3.classList.toggle("bullet-visible-vapor");
});
blob4.addEventListener("click", () =>{
  bullet4.classList.toggle("bullet-visible-needler");
});
blob5.addEventListener("click", () =>{
  bullet5.classList.toggle("bullet-visible-ripper");
});
blob6.addEventListener("click", () =>{
  bullet6.classList.toggle("bullet-visible-homer");
});



/*----------------------------- S----------------------------- */

/*----------------------------- T----------------------------- */

/*----------------------------- U----------------------------- */

/*----------------------------- V----------------------------- */

/*----------------------------- W----------------------------- */

/*----------------------------- J----------------------------- */

/*----------------------------- X----------------------------- */

/*----------------------------- Y----------------------------- */

/*----------------------------- Z----------------------------- */
