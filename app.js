function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Close nav menu if click outside
document.addEventListener('click', (e) => {
  const nav = document.getElementById("nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("show");
  }
});


  function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.style.display = (nav.style.display === "none" || nav.style.display === "") ? "flex" : "none";
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  // Optional: Toggle back nav menu if screen resizes (like responsive fix)
  window.addEventListener('resize', function () {
    const nav = document.getElementById("nav-links");
    if (window.innerWidth > 768) {
      nav.style.display = "flex";
    }
  });

