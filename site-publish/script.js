const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
const sections = [...document.querySelectorAll("main section[id], main#home")];

document.getElementById("year").textContent = new Date().getFullYear();

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 120;
  let activeId = "home";

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      activeId = section.id;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
