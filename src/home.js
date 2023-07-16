import restImage from "./assets/images/restaurant.jpg";

export default function createHome() {
  const homeContent = document.createElement("div");
  const leftContent = document.createElement("div");
  const homeHero = document.createElement("div");
  const heroInfo = document.createElement("div");
  const homeButtons = document.createElement("div");
  const rightContent = document.createElement("div");

  const highlightSpan = document.createElement("span");
  const lineBreaker1 = document.createElement("br");
  const lineBreaker2 = document.createElement("br");

  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeContent.classList.add("home-content");
  leftContent.classList.add("left-content");
  homeHero.classList.add("home-hero");
  heroInfo.classList.add("hero-info");
  homeButtons.classList.add("home-buttons");
  rightContent.classList.add("right-content");
  menuBtn.classList.add("menu-btn");
  contactBtn.classList.add("contact-btn");
  highlightSpan.classList.add("highlight");

  const myRestImage = new Image();
  myRestImage.src = restImage;
  myRestImage.alt = "Restaurant Image";

  homeHero.textContent = "Have the best";
  highlightSpan.textContent = " Dinner ";
  const textNode1 = document.createTextNode("Experience with your loved ones.");

  homeHero.appendChild(highlightSpan);
  homeHero.appendChild(lineBreaker1);
  homeHero.appendChild(textNode1);

  heroInfo.textContent = "Looking for a place to celebrate the day?";
  heroInfo.appendChild(lineBreaker2);
  const textNode2 = document.createTextNode("You've come to the right place.");
  heroInfo.appendChild(textNode2);

  menuBtn.textContent = "See Menu";
  contactBtn.textContent = "Contact Us";

  homeButtons.appendChild(menuBtn);
  homeButtons.appendChild(contactBtn);

  leftContent.appendChild(homeHero);
  leftContent.appendChild(heroInfo);
  leftContent.appendChild(homeButtons);
  rightContent.appendChild(myRestImage);

  homeContent.appendChild(leftContent);
  homeContent.appendChild(rightContent);

  return homeContent;
}
