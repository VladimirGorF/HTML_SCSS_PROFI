"use strict";

try {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardsDiv = document.querySelector(".feture_box");
      data.forEach(({ image, card_name, description, price }) => {
        const productElem = ` 
      <a  class="feture_items">

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

        if (!cardsDiv) {
          console.error("Element .feture_box not found");
          return;
        } else {
          cardsDiv.insertAdjacentHTML("beforeend", productElem);
        }
      });

      // создаем массив карточек при клике на которые уйдем в блок ниже
      const arrayFetItems = document.querySelectorAll(".feture_items");

      //создадим общий контейнер для карт
      const cartConteinerElement = document.createElement("div");
      cartConteinerElement.className = "cartConteiner";
      const footer_topElement = document.querySelector(".footer_top");
      footer_topElement.insertAdjacentElement("afterend", cartConteinerElement);

      arrayFetItems.forEach((element) => {
        element.addEventListener("click", function () {
          try {
            fetch("dataCart.json")
              .then((response) => response.json())
              .then((data) => {
                //проверяем есть ли контейнер для товаров
                if (!document.querySelector(".cartConteiner")) {
                  //снова создадим общий контейнер для карт, если его до этого удалили
                  const cartConteinerElement = document.createElement("div");
                  cartConteinerElement.className = "cartConteiner";
                  const footer_topElement =
                    document.querySelector(".footer_top");
                  footer_topElement.insertAdjacentElement(
                    "afterend",
                    cartConteinerElement
                  );
                }

                // добавляем заголовок
                if (document.querySelector(".cards__title") === null) {
                  const cartTitle = document.createElement("h3");
                  cartTitle.textContent = "Cart Items";
                  cartTitle.className = "cards__title";
                  cartConteinerElement.prepend(cartTitle);
                }

                const cardsDiv = document.createElement("div");
                cardsDiv.className = "cards";
                cartConteinerElement.appendChild(cardsDiv);

                data.forEach(
                  ({ image, card_name, price, color, size, quantity, max }) => {
                    const arrayDescendants = element.querySelectorAll("*");

                    // находим id карты по которой был клик
                    arrayDescendants.forEach((element) => {
                      if (element.className === "fet_title") {
                        const cartIdName = element.textContent;

                        // и если номера совпадают в базах json, выводим данные
                        if (card_name === cartIdName) {
                          const productElem = `
                       <div class="cards__item">
                         <img class="cards__image" src="${image}" alt="${card_name}" />
                         <div class="cards__desc">
                         <h3 class="cards__heading">${card_name}</h3>
                         <div class="cards__txt">Price: <span>$${price}</span></div>
                         <div class="cards__txt">Color: ${color}</div>
                         <div class="cards__txt">Size: ${size}</div>
                         <div class="cards__txt">
                          Quantity: <input class="quantity" type="number" name="Quantity" value = "${quantity}" min="1" max ="${max}" />
                       </div>
                       </div>
                         <button class ="cards__xButton"><img src="cartImages/Vector.svg" alt="X"></button>
                       </div>`;

                          cardsDiv.insertAdjacentHTML("beforeend", productElem);
                        }
                      }
                    });
                  }
                );

                const cartCounter = document.querySelectorAll(".cards");
                const fiveElement = document.querySelector(".five");
                fiveElement.textContent = `${cartCounter.length}`;

                const closArr = document.querySelectorAll(".cards__xButton");
                closArr.forEach((elem) => {
                  elem.addEventListener("mouseenter", function () {
                    closArr.classList.add();
                  });
                  elem.addEventListener("click", function () {
                    elem.closest(".cards").remove();
                    if (
                      cartConteinerElement.querySelectorAll(".cards__item")
                        .length === 0
                    ) {
                      const cartTitle = document.querySelector(".cards__title");
                      if (cartTitle) {
                        cartTitle.remove(); // удаляем заголовок если он существует
                      }
                    }
                    const cartCounter = document.querySelectorAll(".cards");
                    const fiveElement = document.querySelector(".five");
                    fiveElement.textContent = `${cartCounter.length}`;
                  });
                });
              });
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
} catch (error) {
  console.log(error);
}
