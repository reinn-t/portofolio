
document.getElementById("year").textContent =
  new Date().getFullYear();

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
