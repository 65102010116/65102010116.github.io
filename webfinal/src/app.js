let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'GeForce RTX™ 3070 Ti GAMING X TRIO 8G',
        image: '1.png',
        price: 28300,
        link: './product/msi/GeForce RTX™ 3070 Ti GAMING X TRIO 8G/detail.html'
    },
    {
        id: 2,
        name: 'GeForce RTX™ 3080 Ti GAMING X TRIO 12G',
        image: '2.png',
        price: 28800,
        link: './product/msi/GeForce RTX™ 3080 Ti GAMING X TRIO 12G/detail.html'
    },
    {
        id: 3,
        name: 'GeForce RTX™ 3090 Ti GAMING X TRIO 24G',
        image: '3.png',
        price: 46900,
        link: './product/msi/GeForce RTX™ 3090 Ti GAMING X TRIO 24G/detail.html'
    },
    {
        id: 4,
        name: 'GeForce RTX™ 4070 Ti GAMING X TRIO 12G',
        image: '4.png',
        price: 31990,
        link: './product/msi/GeForce RTX™ 4070 Ti GAMING X TRIO 12G/detail.html'
    },
    {
        id: 5,
        name: 'Radeon™ RX 6650 XT GAMING X 8G',
        image: '5.png',
        price: 14490,
        link: 'product/msi/Radeon™ RX 6650 XT GAMING X 8G/detail.html'
    },
    {
        id: 6,
        name: 'Radeon™ RX 6750 XT GAMING X TRIO 12G',
        image: '6.png',
        price: 18900,
        link: 'product/msi/Radeon™ RX 6750 XT GAMING X TRIO 12G/detail.html'
    },
    {
        id: 7,
        name: 'Radeon™ RX 6950 XT GAMING X TRIO 16G',
        image: '7.png',
        price: 35900,
        link: 'product/msi/Radeon™ RX 6950 XT GAMING X TRIO 16G/detail.html'
    },
    {
        id: 8,
        name: 'Radeon™ RX 7900 XT GAMING TRIO CLASSIC 20G',
        image: '8.png',
        price: 38900,
        link: 'product/msi/Radeon™ RX 7900 XT GAMING TRIO CLASSIC 20G/detail.html'
    }









];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <a href="${value.link}"><button type="button">Detail</button></a>
            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}





function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}