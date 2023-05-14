window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("navTwo", window.scrollY > 0)
})