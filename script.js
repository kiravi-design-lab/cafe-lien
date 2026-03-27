const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});
