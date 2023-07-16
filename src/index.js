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

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderMenu(event) {
  removeAllChildNodes(content);
  content.appendChild(createMenu());
}

function renderHome(event) {
  removeAllChildNodes(content);
  content.appendChild(createHome());
  contactBtn = document.querySelector(".contact-btn");
  menuBtn = document.querySelector(".menu-btn");
  contactBtn.addEventListener("click", renderContacts);
  menuBtn.addEventListener("click", renderMenu);
}

function renderContacts(event) {
  removeAllChildNodes(content);
  content.appendChild(createContacts());
}

menu.addEventListener("click", renderMenu);
home.addEventListener("click", renderHome);
contacts.addEventListener("click", renderContacts);
