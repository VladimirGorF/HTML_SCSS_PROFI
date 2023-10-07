"use strict";

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsDiv = document.querySelector(".feture_box");
    data.forEach(({ image, card_name, description, price }) => {
      const productElem = ` 
      <a href="product.html" class="feture_items">

        <div class="item2_img_box">
          <img src=${image} alt="image item" class="fet_image">
            <div class="image_filter"></div>
            <div class="fet_item2_img2_inform">              
              <img src="img/Basket2.svg" alt="Basket2">                  
              <div class="add">Add to Cart</div>                  
            </div>                          
        </div>

        <div class="fet_item_inform">
          <div class="fet_title">${card_name}</div>
          <div class="fet_text">${description}</div>
          <div class="price">$${price}</div>
        </div>
      </a> `;

      cardsDiv.insertAdjacentHTML("beforeend", productElem);
    });
  });
