const sideMenu = document.querySelector(".side-menu");
const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#side-menu-close");
const body = document.querySelector("body");
const sideMenus = document.querySelectorAll("side-menu-item");

const openSideMenu = () => {
  sideMenu.classList.add("open-side-menu");
  body.style.overflow = "hidden";
};

const closeSideMenu = () => {
  sideMenu.classList.remove("open-side-menu");
  body.style.overflowY = "unset";
};

hamburger.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);

for (let i = 0; i < sideMenus.length; i += 1) {
  sideMenus[i].addEventListener("click", closeSideMenu);
}
