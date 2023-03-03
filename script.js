import { menuArray } from "./data.js";

document.addEventListener('click', function(e) {
    console.log(e.target.dataset)
})

function render() {
    getMenuItems()
}

function getMenuItems(){
    let menuHtml = ''
    const menuItems = document.querySelector('.menu-items')

    menuArray.forEach(function(menuItem){
        menuHtml +=
        `
            <div class="menu-item">
            <div class="menu-container-left">
                <div class="menu-img">${menuItem.emoji}</div>
                <div class="menu-text">
                    <h2 class="product-name">${menuItem.name}</h2>
                    <p class="ingredients">${menuItem.ingredients}</p>
                    <h3 class="menu-price">$${menuItem.price}</h3>
                </div>
            </div>
            <div class="menu-container-right">
                <button class="add-to-basket-btn">+</button>
            </div>
            </div>
        `
    })
    menuItems.innerHTML += menuHtml
}

render()


`
    <div class="menu-items">
    <div class="menu-container-left">
        <div class="menu-img">🍕</div>
        <div class="menu-text">
            <h2 class="product-name">Pizza</h2>
            <p class="ingredients">pepperoni, mushroom, mozarella</p>
            <h3 class="menu-price">$14</h3>
        </div>
    </div>
    <div class="menu-container-right">
        <button class="add-to-basket-btn">+</button>
    </div>
    <div>
`

`
    <div class="order-item">
    <div class="order-item-left">
        <h2 class="order-item">Pizza</h2>
        <button class="remove-item-btn">remove</button>
    </div>
    <div class="order-item-right">
        <h3 class="order-item-price">$14</h3>
    </div>
    </div>
`


