// start burger menu 
const burger = document.getElementById("burger");
const navBar = document.getElementById("hidden");
const landing = document.querySelector(".landing");
burger.onclick = ()=>{
    navBar.hasAttribute("class") ? navBar.removeAttribute("class"): navBar.setAttribute("class", "active");
};
landing.onclick = ()=>{
    if(navBar.hasAttribute("class")){
        navBar.removeAttribute("class");
    }
}
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