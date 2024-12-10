// HEADER
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".container").style.filter = "blur(4px)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".container").style.filter = "blur(0)";
}

// PROJETS

const menuToggles = document.querySelectorAll(".menu-toggle");

menuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const submenu = toggle.nextElementSibling;
    submenu.style.display = submenu.style.transition = "all 1s ease-out";
    submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
    const arrow = toggle.querySelector(".arrow");
    arrow.textContent = submenu.style.display === "flex" ? "▲" : "▼";
  });
});

//button retour en haut

const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const goBackButton = document.getElementById("goBack");

goBackButton.addEventListener("click", function () {
  history.back(); // Va à la page précédente
});
