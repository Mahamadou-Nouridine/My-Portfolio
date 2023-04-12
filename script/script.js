import {data, styles} from "./data.js";

const sideMenu = document.querySelector(".side-menu");
const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#side-menu-close");
const body = document.querySelector("body");
const sideMenus = document.querySelectorAll(".side-menu-item");
const projectCards = document.querySelector("#projects-cards");
let size = window.innerWidth
window.onresize = () => {
  size = window.innerWidth
}

// side menu
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

// side menu

// project cards
// showing the cards
for (let i = 1; i < data.length; i += 1) {
  const card = document.createElement("div");
  card.innerHTML = `
  <div class="card">
  <div class="card-details">
  <h2 class="card-title">${data[i].name}</h2>
  <p class="card-description">
      ${data[i].description}
  </p>
  <ul class="card-tags">
      <li class="card-tag">HTML</li>
      <li class="card-tag">Booststrap</li>
      <li class="card-tag">Ruby</li>
  </ul>
</div>
<button class="card-button">See project</button>
</div>`;
  card.style.setProperty('background',`linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${data[i].image})`);
  for (let [key, value] of Object.entries(styles.desktop.card)) {
    card.style.setProperty(key, value)
  }
  
  if(size >= 768) {
    card.addEventListener('mouseover', () => {
      card.style.backgroundImage = `url(${data[i].image})`;
      card.style.transform = 'scale(1.08)';
      card.style.backgroundColor = 'aqua';
      const cardButtons = document.querySelectorAll('.card-button ')
      const cardDetails = document.querySelectorAll('.card-details')
      for(let cardDetail of cardDetails){
        cardDetail.style.setProperty('display', 'none')
      }

      for(let cardButton of cardButtons){
        cardButton.style.setProperty('display', 'block')
      }
    });
  
    card.addEventListener('mouseout', () => {
      card.style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${data[i].image})`;
      card.style.transform = 'scale(1)';
    });
  
  }
  projectCards.appendChild(card);
}
// project cards

