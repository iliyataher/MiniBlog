const mobileIcon = document.querySelector(".mobile-icon");
const times = document.querySelector(".times");
const navbarCollapse =document.querySelector(".collapse");
const collapsediv = document.querySelector(".collapse-div");

mobileIcon.addEventListener("click" , ()=>{
    mobileIcon.style.display="none";
    times.style.display="block";
    navbarCollapse.classList.add="show";
    navbarCollapse.style.height="268px"
    
    setTimeout(()=>{
        collapsediv.style.display="block"
    } , 250)

})

times.addEventListener("click" , ()=>{
    mobileIcon.style.display="block";
    times.style.display="none";
    navbarCollapse.classList.remove="show"
    navbarCollapse.style.height="7px";
    collapsediv.style.display="none"
})

