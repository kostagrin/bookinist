"use strict";
import { bookList } from "./book-list.js";

const products = document.querySelector(".products");

function createRow() {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 4; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("three", "columns", "card");
    row.insertAdjacentElement("beforeend", cardContainer);
  }
  return row;
}

function createMarkup() {
  for (let i = 0; i < bookList.length / 4; i++) {
    const row = createRow();
    products.insertAdjacentElement("beforeend", row);
  }
}

export function init() {
  createMarkup();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => (card.id = i + 1));
}

export function fillContent(i, index) {
  const id = index + 1;
  const card = document.getElementById(id);
  const innerCardHTML = `
	<div class="card__img-container">
		<img src="/images/${id}.jpg" alt="${i.bookName}">
	</div>
	<h2 class="card__name">${i.bookName}</h2>
	<h3 class="card__author">${i.author}</h3>
	<p class="card__condition">Состояние: ${i.condition}</p>
	<p class="card__price">${i.price} Р</p>
  <a class="button button-primary button--description" href="#">Описание</a>
</div>
	`;
  card.innerHTML = innerCardHTML;
}

export { bookList };
