export default function createMenu() {
  const menuWrapper = document.createElement("div");
  const menuHero = document.createElement("div");
  const menuContent = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cards = [];

  menuContent.classList.add("menu-content");
  cardContainer.classList.add("card-container");
  menuWrapper.classList.add("menu-wrapper");
  menuHero.classList.add("menu-hero");

  const imageContext = require.context("./assets/images/", false, /(image\d+\.(png|jpe?g|svg|gif))$/);
  const imageFileNames = imageContext.keys();

  for (let i = 0; i < imageFileNames.length; i++) {
    const img = document.createElement("img");
    img.src = imageContext(imageFileNames[i]);

    cards[i] = document.createElement("div");
    cards[i].appendChild(img);
    cards[i].classList.add("card");
    cardContainer.appendChild(cards[i]);
  }

  menuContent.appendChild(cardContainer);

  menuHero.textContent = "Our Menu";

  menuWrapper.appendChild(menuHero);
  menuWrapper.appendChild(menuContent);

  return menuWrapper;
}
