// Toolbar
const addItemsScreen = document.querySelector(".addItem");
const viewItemsScreen = document.querySelector(".viewItems");
const basketScreen = document.querySelector(".basket");

const viewItemslink = document.querySelector(".toolbar-link-view");
const basketlink = document.querySelector(".toolbar-link-basket");
const addItemslink = document.querySelector(".toolbar-link-admin");
showScreen(0);


viewItemslink.addEventListener("click", () => {
    showScreen(0)
})
basketlink.addEventListener("click", () => {
    showScreen(1)
})
addItemslink.addEventListener("click", () => {
    showScreen(2)
})

function showScreen(num) {
    console.log("Clicked",num)
    addItemsScreen.style.display = "none";
    viewItemsScreen.style.display = "none";
    basketScreen.style.display = "none";

    if (num === 2)
        addItemsScreen.style.display = "block";
    else if (num === 0)
        viewItemsScreen.style.display = "block";
    else
        basketScreen.style.display = "block";
        
}

// Admin

const stock = [];
start();
document.querySelector(".addItem-button-add").addEventListener("click", () => {
    addStock(document.querySelector(".addItem-input-name").value,
            document.querySelector(".addItem-input-description").value,
            document.querySelector(".addItem-input-picture").value,
            document.querySelector(".addItem-input-price").value
            )
    document.querySelector(".addItem-input-name").value = "";
    document.querySelector(".addItem-input-description").value = "";
    document.querySelector(".addItem-input-picture").value = "";
    document.querySelector(".addItem-input-price").value = "";
})
function addStock(itemName, itemDescription, itemPicture, itemPrice) {
    stock.push({
        name: itemName,
        description:itemDescription,
        picture: itemPicture,
        price: itemPrice
    }
    )
    inStock();
}

function start() { 
    addStock("Car", "Twin exhaust = Wheelbarrow","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
    addStock("Skates","Penguin sized","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
    addStock("Bike", "Big and Blue", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
    addStock("Car", "Twin exhaust = Wheelbarrow","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
    addStock("Skates","Penguin sized","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
    addStock("Bike", "Big and Blue", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
    
    inStock();
}

function inStock() {
    let stockList = document.querySelector(".addItem-group-list");
    stockList.innerHTML = "";
    for (let x in stock) {
        let item = document.createElement("p")
        item.innerHTML = stock[x].name + " - " + stock[x].price;
        stockList.appendChild(item)  
    }
}

// View items

// const stock = [];
const basket = [];

function addStock(itemName, itemDescription, itemPicture, itemPrice) {
    stock.push({
        name: itemName,
        description:itemDescription,
        picture: itemPicture,
        price: itemPrice
    }
    ) 
}
function addToBasket(stock) {
    basket.push({
        name: stock.itemName,
        description:stock.itemDescription,
        picture: stock.itemPicture,
        price: stock.itemPrice
    }
    ) 
}

let mainDisplay = document.querySelector(".view-items-container");
let card;
let cardBody;
let cardHeader;
let cardFooter;

for (let x = 0; x < stock.length; x++){
    // Create card
    card = document.createElement("div");
    // Create parts of card
    cardHeader = document.createElement("div");
    cardBody = document.createElement("div");
    cardFooter = document.createElement("div")
    // Adds cards and sub-elements
    card.classList.add("card");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body");
    cardFooter.classList.add("card-footer");

    cardHeader.textContent = stock[x].name;
    cardBody.textContent = stock[x].description;
    cardFooter.textContent = "£ "+stock[x].price;

    // Adds card Items to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    //Adds Event Listener to card
    card.addEventListener("click", () => { 
        wogDisplay(stock[x].name,stock[x].description,stock[x].price,stock[x].picture);
        document.querySelector(".viewItems-section-detailedView").style.display = "block";
    })

    //Adds card to page
    mainDisplay.appendChild(card)
}

function wogDisplay(name, desc, price, image) {
    let mainDisplay = document.querySelector(".view-items-container");
    mainDisplay.style.width = "70%";

    document.querySelector(".viewItems-product-name").innerHTML = name;
    document.querySelector(".viewItems-product-description").innerHTML = desc;
    document.querySelector(".viewItems-product-price").innerHTML = "£"+price;
    document.querySelector(".viewItems-product-image").src = image;
    document.querySelector(".viewItems-section-close").addEventListener("click", () => {
        document.querySelector(".viewItems-section-detailedView").style.display = "none";
        mainDisplay.style.width = "100%";
    })
    
}

// Basket
function getPrice() {
    let price =0
    for (let i = 0; i < stock.length; i++){
        price += stock[i].price;
    }
    document.querySelector(".basket-price").innerHTML = price
}
document.querySelector(".basket-button-purchase").addEventListener("click", () => {
    let error = document.querySelector(".basket-msg-error");
    let street = document.querySelector(".basket-input-street")
    let town = document.querySelector(".basket-input-town")
    let postcode = document.querySelector(".basket-input-postcode")
    let name = document.querySelector(".basket-input-name")
   
    if ( name.value.length === 0 )
        error.innerHTML += "You should enter a name"
    else if (street.value.length ===0)
        error.innerHTML += "You should enter a Street"
    else if (town.value.length ===0)
        error.innerHTML += "You should enter a town"
    else if (postcode.value.length ===0)
        error.innerHTML += "You should enter a postcode"
    else
        document.querySelector(".basket-right").style.visibility = "visible";

   

})