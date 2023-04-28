 const stock = [];
start();
function addStock(itemName, itemDescription, itemPicture, itemPrice) {
    stock.push({
        name: itemName,
        description:itemDescription,
        picture: itemPicture,
        price: itemPrice
    }
    ) 
}

function start() { 
    addStock("Car", "Twin exhaust = Wheelbarrow","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
    addStock("Skates","Penguin sized","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
    addStock("Bike", "Big and Blue", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
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
    cardFooter.textContent = stock[x].price;

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
    document.querySelector(".viewItems-product-name").innerHTML = name;
    document.querySelector(".viewItems-product-description").innerHTML = desc;
    document.querySelector(".viewItems-product-price").innerHTML = "£"+price;
    console.log(image);
    document.querySelector(".viewItems-product-image").src = image;
    document.querySelector(".viewItems-section-close").addEventListener("click", () => {
        document.querySelector(".viewItems-section-detailedView").style.display = "none";
    })
    
}
