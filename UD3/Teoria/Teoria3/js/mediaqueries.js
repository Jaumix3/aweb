const btnMnu = document.getElementById("btn-mnu")
const navMenu = document.querySelector("header nav")



btnMnu.addEventListener("click", ()=>{
    //console.log(btnMnu);
    navMenu.classList.add("nav-visible")
});

