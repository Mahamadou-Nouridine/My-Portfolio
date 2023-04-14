import data from "./data.js";

const sideMenu = document.querySelector(".side-menu");
const hamburger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#side-menu-close");
const body = document.querySelector("body");
const sideMenus = document.querySelectorAll(".side-menu-item");
const projectCards = document.querySelector("#projects-cards");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector("#popup-title");
const popupTags = document.querySelector(".popup-tags");
const popupImage = document.querySelector("#popup-image");
const popupDescription = document.querySelector("#popup-description");
const popupSeeLive = document.querySelector("#popup-see-live");
const popupSeeSource = document.querySelector("#popup-see-source");
const popupCross = document.querySelector("#popup-cross");
const project1Card = document.querySelector(".project1-card");
const emailInput = document.querySelector("#email-input");
const validationError = document.querySelector(".validation-error");

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
// project1 card
const project1 = data[0];
const tagsData = project1.technologies;
let tags1 = "";
for (let i = 0; i < tagsData.length; i += 1) {
  tags1 += `<li class="project1-tag">${tagsData[i]}</li>`;
}
project1Card.innerHTML = `
 <div class="image-project1">
                    <img class="project1-image" src=${project1.image} alt="multi-post-stories" />
                </div>
                <div class="project1-description">
                    <h2 class="project1-card-title">${project1.name}</h2>
                    <p class="project1-card-description">
                        ${project1.description}
                    </p>
                    <ul class="project1-tags">
                       ${tags1}
                    </ul>

                    <button class="project1-button">See Project</button>
                </div>
`;

// showing the cards
for (let i = 1; i < data.length; i += 1) {
  const card = document.createElement("div");
  card.classList.add("card");
  let tags = "";
  for (let j = 0; j < data[i].technologies.length; j += 1) {
    tags += `<li class="card-tag">${data[i].technologies[j]}</li>`;
  }
  card.innerHTML = `
  <div class="card-details${i}">
  <h2 class="card-title">${data[i].name}</h2>
  <p class="card-description">
      ${data[i].description}
  </p>
  <ul class="card-tags">
      ${tags}
  </ul>
</div>
<button class="card-button ${`card-button${i}`}">See project</button>`;
  card.style.setProperty(
    "background",
    `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${data[i].image})`
  );
  card.style.setProperty("background-size", "cover");

  card.addEventListener("mouseover", () => {
    if (window.innerWidth >= 768) {
      card.style.backgroundImage = `url(${data[i].image})`;
      document.querySelector(`.card-details${i}`);
      document
        .querySelector(`.card-details${i}`)
        .style.setProperty("display", "none");
      card.style.setProperty("background-size", "cover");
    }
  });

  card.addEventListener("mouseout", () => {
    if (window.innerWidth >= 768) {
      card.style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${data[i].image})`;
      document
        .querySelector(`.card-details${i}`)
        .style.setProperty("display", "block");
      card.style.setProperty("background-size", "cover");
    }
  });

  projectCards.appendChild(card);
}

const changePopupData = (data) => {
  popupTitle.textContent = data.name;
  popupDescription.textContent = data.description;
  popupImage.src = data.image;
  popupSeeLive.href = data.deployment;
  popupSeeSource.href = data.source;
  let tags = "";
  for (let i = 0; i < data.technologies.length; i += 1) {
    tags += `<li class="project1-tag">${data.technologies[i]}</li>`;
  }
  popupTags.innerHTML = tags;
};

// open popup function
const openPopup = (data) => {
  changePopupData(data);
  popupContainer.classList.add("popup-container-open");
  setTimeout(() => {
    popup.classList.add("popup-open");
    body.style.overflow = "hidden";
  }, 100);
};

const closePopup = () => {
  popup.classList.remove("popup-open");
  setTimeout(() => {
    popupContainer.classList.remove("popup-container-open");
    body.style.overflow = "unset";
  }, 100);
};

// see project button
for (let i = 1; i < data.length; i += 1) {
  document.querySelector(`.card-button${i}`).addEventListener("click", () => {
    openPopup(data[i]);
  });
}

// see project 1 button
document.querySelector(".project1-button").addEventListener("click", () => {
  openPopup(project1);
});

popupCross.addEventListener("click", closePopup);

// project cards

// card calidation
// set error
const setError = (message) => {
  validationError.textContent = message;
  validationError.style.setProperty("display", "block");
};

// check if text is lowercase
const isLowerCase = (input) => input === String(input).toLowerCase();

document.querySelector(".form").addEventListener("submit", (e) => {
  const input = emailInput.value;
  const lowercase = isLowerCase(input);
  if (!lowercase) {
    e.preventDefault();
    setError("The Email input should be lowercase");
  } else {
    validationError.style.diplay = "none";
  }
});
