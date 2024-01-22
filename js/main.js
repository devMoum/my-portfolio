// start burger menu 
const burger = document.getElementById("burger");
const navBar = document.getElementById("hidden");
burger.onclick = ()=>{
    navBar.hasAttribute("class") ? navBar.removeAttribute("class"): navBar.setAttribute("class", "active");
};
// end burger menu 
// start scrool totop 
let arrow = document.querySelector(".upscroll");
window.onscroll = function () {
    this.scrollY >= 1000 ? arrow.classList.add("show"): arrow.classList.remove("show"); 
}
arrow.onclick = ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
// end scroll to top 