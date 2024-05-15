let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Samyang-Cheese',
        image: 'image/samyang.jpeg',
        price: 75
    },
    {
        id: 2,
        name: 'Samyang-X2',
        image: '9.JFIF',
        price: 70
    },
    {
        id: 3,
        name: 'MELONA',
        image: '10.jfif',
        price: 35
    },
    {
        id: 4,
        name: 'Binch',
        image: '11.jfif',
        price: 250
    },
    {
        id: 5,
        name: 'Flavored Mlik Drink',
        image: '12.jfif',
        price: 45
    },
    {
        id: 6,
        name: 'Iced Fruit Drink',
        image: '14.jfif',
        price: 70
    },
    {
        id: 7,
        name: 'HBAF-Almonds',
        image: '12.jfif',
        price: 150
    },
    {
        id: 9,
        name: 'Canned Coffee',
        image: '14.jfif',
        price: 65
    },
    {
        id: 10,
        name: 'Orion-ChocoPie',
        imgsrc:'17.jpg',
        price: 25
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"><h3>--<h3></button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})"><h3>+<h3></button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    
    }
    reloadCard();
}