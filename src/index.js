import createHome from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import "./style.css";

const content = document.querySelector(".content");

content.appendChild(createHome());
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const contacts = document.querySelector(".contacts");
let menuBtn = document.querySelector(".menu-btn");
let contactBtn = document.querySelector(".contact-btn");

function changeTitle(title) {
  document.title = title;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderMenu(event) {
  removeAllChildNodes(content);
  content.appendChild(createMenu());
  changeTitle("The Restaurant | Menu");
}

function renderHome(event) {
  removeAllChildNodes(content);
  content.appendChild(createHome());
  changeTitle("The Restaurant | Home");
  contactBtn = document.querySelector(".contact-btn");
  menuBtn = document.querySelector(".menu-btn");
  contactBtn.addEventListener("click", renderContacts);
  menuBtn.addEventListener("click", renderMenu);
}

function renderContacts(event) {
  removeAllChildNodes(content);
  content.appendChild(createContacts());
  changeTitle("The Restaurant | Contacts");
}

menu.addEventListener("click", renderMenu);
home.addEventListener("click", renderHome);
contacts.addEventListener("click", renderContacts);
contactBtn.addEventListener("click", renderContacts);
menuBtn.addEventListener("click", renderMenu);
