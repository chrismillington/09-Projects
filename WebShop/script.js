
let stock = [];//Stock
let basket = [];


// Toolbar Functions

function screens(num){
    let sections = document.querySelectorAll(".section");
    for(let i = 0;i<sections.length;i++)
        sections[i].style.display = "none";
    sections[num].style.display = "block" ;       
}
function toolbarLinks(){
    let links = document.querySelectorAll(".links a");
    for(let x = 0;x<links.length;x++){
        links[x].addEventListener("click",()=>{ screens(x) })
    }
}
//Admin

function addItems(){
    let item = document.querySelectorAll(".addItems input");
    addStock(item[0].value,item[1].value,item[2].value,item[3].value)
}
function addStock(itemName, itemDescription, itemPicture, itemPrice) {
    stock.push({
        name: itemName,
        description:itemDescription,
        picture: itemPicture,
        price: itemPrice
    })
}
function addBasket(num) {
    basket.push(num)
    console.log("addBasket",basket)
}
function displayStock(){
    let stockList = document.querySelector(".stockItems");
    let item;
    for(let x = 0;x<stock.length;x++){
        item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = stock[x].name + " - " + stock[x].price
        stockList.appendChild(item);
    }
}

//DisplayItems
function DisplayItems(){

    let cards = document.querySelector(".cards");

    let card;

    stock.forEach((item) => {
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = item.name;
        cards.appendChild(card);
    })
}
function addListeners() {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            insetDisplay(card.name, card.description, card.price);
            console.log("clicked");
        })
    })
}

function insetDisplay(itemName, itemDescription, itemPicture, itemPrice, itemNum) {
    let inset = document.querySelector(".inset");
    let closeButton = document.querySelector(".closeBttn");
    closeButton.addEventListener("click", () => { inset.style.display = "none" })
    document.querySelector(".insetName").innerHTML = itemName;
    document.querySelector(".insetDescription").innerHTML = itemDescription;
    //document.querySelector(".insetPicture") = itemPicture;
    document.querySelector(".insetPrice").innerHTML = itemPrice;
    document.querySelector(".insetToBasket").addEventListener("click",
        () => {
            console.log("Wonky");
            addBasket(itemNum);
    })
}

function startup() {
    addStock("Car", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web", 5275)
    addStock("Skates", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087", 17.99)
    addStock("Bike", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
    addStock("Badger", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web", 50)
    addStock("Dugong", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087", 75)
    addStock("Hammer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 7.99);
    displayStock();
    toolbarLinks();
    screens(0);
    DisplayItems();
    addListeners();


}
startup();
