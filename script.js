const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  document.addEventListener("click", function(e) {

    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && !isClickHamburger) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }

  });
