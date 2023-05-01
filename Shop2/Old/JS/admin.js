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

