const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
const navLinks = document.querySelectorAll(".nav-bar li");
console.log(navLinks);
navLinks.forEach((element) => {
  element.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };
});
