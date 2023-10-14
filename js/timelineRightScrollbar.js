const progressBar = document.querySelector(".rightScrollbarTimeline");
let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let progress = (document.documentElement.scrollTop / totalHeight) *100;
    progressBar.style.height = `${progress}%`;
    progressBar.style.opacity = `${progress}%`;
    // partie 2
})
// const progressBarClick = document.querySelector(".clickRightScrollbarTimeline");
// progressBarClick.addEventListener("click", (e) => {
//     let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
//     window.scrollTo({
//         top: newPageScroll,
//         behavior: "smooth"
//     })
// })

