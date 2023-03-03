import { menuArray } from "./data.js";

const basket = []

document.addEventListener('click', function(e) {
    if (e.target.dataset.item) {
        handleAddItem(e.target.dataset.item)
    }
})

function handleAddItem(itemId) {
    const targetObject = menuArray.filter(function(menuItem) {
        return menuItem.id == itemId
    })[0]
    basket.push(targetObject)
    updateBasket()
}

function render() {
    getMenuItems()
}

function updateBasket() {
    let basketHtml = ''
    const orderItemsContainer = document.querySelector('.order-items-container')

    console.log(basket)
    basket.forEach(function(menuItem) {
        basketHtml += 
        `
            <div class="order-item">
                <div class="order-item-left">
                    <h2 class="order-item">${menuItem.name}</h2>
                    <button class="remove-item-btn">remove</button>
                </div>
                <div class="order-item-right">
                    <h3 class="order-item-price">$${menuItem.price}</h3>
                </div>
            </div>
        `
    })
    orderItemsContainer.innerHTML = basketHtml
    updateTotal()
}

function updateTotal() {
    document.querySelector('.total-price-num').textContent = `$${getTotalPrice()}`
}

function getTotalPrice() {
    let total = 0
    basket.forEach(function(menuItem) {
        total += menuItem.price
    })
    return total
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
                <button class="add-to-basket-btn" data-item=${menuItem.id}>+</button>
            </div>
            </div>
        `
    })
    menuItems.innerHTML += menuHtml
}

render()


