import Games from "./gamesmodule.js";
import { displayGamesData } from "./ui.module.js";

let navBtns = document.querySelectorAll("[-data-category]");
let closeBtn = document.querySelector(".fa-close");
let homeSection = document.querySelector(".home-section");
let gameDetailSection = document.querySelector(".game-detials");
let loadingScreen = document.querySelector(".loading-section");
let navBar = document.querySelector(".navbar");

let category;

let newGames = new Games();

displayCategory();

document.addEventListener("DOMContentLoaded", function () {
  if (document.readyState === "interactive") {
    loadingScreen.classList.remove("d-none");
  }
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navBtns.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
    category = e.target.getAttribute("-data-category");
    loadingScreen.classList.remove("d-none");
    displayCategory(category);
  });
});

closeBtn.addEventListener("click", () => {
  gameDetailSection.classList.add("d-none");
  homeSection.classList.remove("d-none");
  loadingScreen.classList.add("d-none");
});

async function displayCategory(cat) {
  await newGames.getGamesData(cat);
  displayGamesData(newGames.gamesData);
}







