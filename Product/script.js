"use strict";

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsDiv = document.querySelector(".feture_box");
    data.forEach(({ image, card_name, description, price }) => {
      const productElem = ` 
      <a href="product.html" class="feture_items"> <img src=${image} alt="image item" class="fet_image">
        <div class="fet_item_inform">
          <div class="fet_title">${card_name}</div>
          <div class="fet_text">${description}</div>
          <div class="price">$${price}</div>
        </div>
      </a> `;

      cardsDiv.insertAdjacentHTML("beforeend", productElem);
    });
  });
