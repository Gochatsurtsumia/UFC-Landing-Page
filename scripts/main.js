document
  .querySelector(".navbar-photo a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});
