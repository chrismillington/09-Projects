let stock = []
let basket = []
let idNum=0
function addStock(itemName, itemDescription, itemPicture, itemPrice) {
    
    stock.push({
        name: itemName,
        description:itemDescription,
        picture: itemPicture,
        price: itemPrice,
        id : idNum
    })
    idNum++;
}
function addItem(){
    let inputs = document.querySelectorAll("input");
    addStock(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    )
    for (let x =0;x<inputs.length;x++){
        inputs[x].value = "";
    }
}
function displayStock(){
    let stockList = document.querySelector(".stockItems");
    stockList.innerHTML = "";
    let item;
    for(let x = 0;x<stock.length;x++){
        item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = stock[x].name + " - £" + stock[x].price
        stockList.appendChild(item);
    }
}
function removeItem(){
    let cards = document.querySelectorAll(".card")
    for(let cd = 0 ;cd<cards.length;cd++){
        cards[cd].addEventListener("click",(e)=>{
            
        })
    }
}

function start(){
    addStock("Car", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web", 5275)
    addStock("Skates", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087", 17.99)
    addStock("Bike", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
    addStock("Badger", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web", 50)
    addStock("Dugong", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087", 75)
    addStock("Hammer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 7.99);
    displayStock();
    document.querySelector(".button").addEventListener("click",()=>{
        addItem()
        displayStock()
    })
}
start()
