

//sticky navBar
window.addEventListener("scroll", function(){
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0)
});
// start togglemenu

function togglemenu(){
  const togglemenu = document.querySelector('.togglemenu');
  const list = document.querySelector('.navbar__menu');
  togglemenu.classList.toggle('active');
  navbar__menu.classList.toggle('active');
}

//mobilemenu transition
const menu = document.querySelector('#hamburger')
const menuLinks = document.querySelector('.navbar__menu')
const body = document.querySelector('body')
const links = document.querySelectorAll('.navbar__menu--links');

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
  body.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);
// link highlighter
const linkHighLighter = (e) =>{
  links.style.color = white;
}
// const activeLi = document.querySelectorAll(".navbar__menu--links");
// menuLinks.addEventListener('mouseover', hover)
// activeLi.forEach((e) => {
//   e.style.hover = white;
// });
// activeLi.addEventListener('click', activeState)
