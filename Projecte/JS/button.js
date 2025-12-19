const boto = document.getElementById("menu-btn");
const aside = document.querySelector("aside");

boto.addEventListener("click", () => {
    aside.classList.toggle("actiu");
});
