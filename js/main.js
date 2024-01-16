// start burger menu 
const burger = document.getElementById("burger");
const navBar = document.getElementById("hidden");
burger.onclick = ()=>{
    if (navBar.hasAttribute("class")){
        navBar.removeAttribute("class");
    }else{
        navBar.setAttribute("class", "active");
    }  
};
// end burger menu 