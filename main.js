const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const testimonial = document.querySelector(".testimonial");
const testimonialContent = testimonial.querySelector(".content");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 500,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "left",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
  origin: "left",
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});
scrollRevealOption.origin = "left";
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  delay: 2500,
});
scrollRevealOption.origin = "bottom";
ScrollReveal().reveal(".testimonial section", {
  ...scrollRevealOption,
  delay: 3000,
});