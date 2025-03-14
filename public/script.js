let hamburger = document.querySelector(".hamburger-menu");
let menubar = document.querySelector(".pages-bar");

hamburger.addEventListener("click", () => {
    menubar.classList.toggle("max-md:hidden");
});

