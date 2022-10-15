"use strict";
import { bookList, init, fillContent } from "./markup.js";

// BUILD MARKUP AND FILL IT WITH THE CONTENT
init();
bookList.forEach(fillContent);

// UX
const btnsShow = Array.from(document.querySelectorAll(".button--description"));
const products = document.querySelector(".products");
const popup = document.querySelector(".pop-up");
const closePopup = document.querySelectorAll(".pop-up__close");
const overlay = document.querySelector(".overlay");

function togglePopup() {
  if (popup.classList.contains("hidden")) {
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
    products.classList.add("fade-out");
  } else {
    popup.classList.add("hidden");
    overlay.classList.add("hidden");
    products.classList.remove("fade-out");
  }
}

function showDescription(e) {
  e.preventDefault();
  const card = e.target.closest(".card");
  const cardID = card.id;
  const textBody = document.querySelector(".description");
  const pagesBody = document.querySelector(".pages");
  const bookName = card.querySelector(".card__name").innerText;
  const image = document.querySelector(".desc-img");
  const obj = bookList.find((el) => el.id == cardID);
  const description = obj.description;
  const numberOfPages = obj.pages;
  togglePopup();

  textBody.innerText = description;
  pagesBody.insertAdjacentText("afterbegin", numberOfPages);
  image.setAttribute("src", `/images/${cardID}.jpg`);
  image.setAttribute("alt", bookName);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    togglePopup();
  }
});

btnsShow.forEach((btn) => btn.addEventListener("click", showDescription));
closePopup.forEach((btn) => btn.addEventListener("click", togglePopup));

overlay.addEventListener("click", togglePopup);

// MARK SOLD BOOKS
const soldBooks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 20, 22, 23, 25, 26, 28,
  30, 32, 33, 34, 38, 39, 40, 41, 47, 49, 51, 58, 60, 62, 63, 65, 67, 84, 87,
  93,
];

function fadeOutABook(id) {
  const book = document.getElementById(id);
  const stamp = document.createElement("div");
  stamp.classList.add("stamp");
  stamp.innerHTML = "ПРОДАНО";
  book.classList.add("sold");
  book.removeChild(book.lastElementChild);
  book.appendChild(stamp);
}

soldBooks.forEach(fadeOutABook);
