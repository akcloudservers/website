const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

console.log(menuToggle);
console.log(navLinks);

menuToggle.addEventListener("click", () => {
  console.log("Clicked");
  navLinks.classList.toggle("active");
});
