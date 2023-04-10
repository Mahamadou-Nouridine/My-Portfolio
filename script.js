const sideMenus = document.getElementsByClassName('side-menu');
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('side-menu-close');
const sideMenu = sideMenus[0];

const openSideMenu = () => {
  sideMenu.classList.add('open-side-menu');
};

const closeSideMenu = () => {
  sideMenu.classList.remove('open-side-menu');
};

hamburger.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);
