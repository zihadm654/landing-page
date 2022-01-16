//sticky navBar
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});
// start togglemenu

// function togglemenu() {
//   togglemenu.classList.toggle('active');
//   navbar__menu.classList.toggle('active');
// }

// mobilemenu transition
const menu = document.querySelector('#hamburger');
const menuBar = document.querySelector('.menu__bar');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuBar.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
