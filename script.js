const sideMenus = document.getElementsByClassName("side-menu");
const hamburger = document.getElementById("hamburger");
const sideMenu = sideMenus[0];

const openSideMenu = () => {
  sideMenu.classList.add("open-side-menu");
};

hamburger.addEventListener("click", openSideMenu);
