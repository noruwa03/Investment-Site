// Menu Function
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
  menu.onclick = () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  };
}

// Dashboard Function
const more = document.querySelector(".more");
const sidebar = document.querySelector(".sidebar");

if (more) {
  more.onclick = () => {
    more.classList.toggle("active");
    sidebar.classList.toggle("active");
  };
}



// Toggle Form
const toggleForm = document.querySelector(".toggleForm");
const registerForm = document.querySelector(".registerForm");
const loginForm = document.querySelector(".loginForm");
const toggleForm2 = document.querySelector(".toggleForm2");

if (toggleForm) {
  toggleForm.onclick = () => {
    toggleForm.classList.toggle("active");
    loginForm.classList.toggle("active");
    registerForm.classList.toggle("active");
  };
}

if (toggleForm2) {
  toggleForm2.onclick = () => {
    toggleForm.classList.toggle("active");
    loginForm.classList.toggle("active");
    registerForm.classList.toggle("active");
  };
}
