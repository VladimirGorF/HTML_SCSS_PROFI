This project is an online clothing store for men, women and children. It consists of the main page, as well as registration pages, shopping cart, catalog and product page. Also in the children's menu section (in the upper right corner) there is a small game written in pure sass and html - duck hunting for entertainment.

You can see the site in web: 
https://vladimirgorf.github.io/HTML_SCSS_PROFI/

Page of the game: https://vladimirgorf.github.io/HTML_SCSS_PROFI/game.html

Enjoy!






Для того чтобы изменения отображались на разных страницах (в вашем случае index.html и cart.html), нужно сохранять состояние корзины в некотором общедоступном месте. Изменения, сделанные на одной странице, должны затем быть прочитаны и применены на другой странице
Вы можете сохранять состояние корзины в LocalStorage каждый раз, когда оно обновляется
// Сохранение данных в LocalStorage
localStorage.setItem('cart', JSON.stringify(cartData));
// Получение данных из LocalStorage
const savedCartData = JSON.parse(localStorage.getItem('cart'));
В файле index.html
// Добавление в корзину
function addToCart(product) {
// ваш код добавления продукта в корзину
// ...
// Сохраняем текущее состояние корзины
localStorage.setItem('cart', JSON.stringify(cart));
}
В файле cart.html
// Загрузка состояния корзины при открытии страницы
document.addEventListener("DOMContentLoaded", function() {
const savedCart = JSON.parse(localStorage.getItem('cart'));
if (savedCart) {
// Восстанавливаем состояние корзины из сохраненных данных
// ...
}
});

 