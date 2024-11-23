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
