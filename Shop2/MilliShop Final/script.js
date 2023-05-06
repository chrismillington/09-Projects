//Global
const stock = [];

// Toolbar

function screens(num){
    let sections = document.querySelectorAll(".section");
    for(let i = 0;i<sections.length;i++)
        sections[i].style.display = "none";
    sections[num].style.display = "block" ;       

}
function toolbarLinks(){
    console.log("Started")
    let sections = document.querySelectorAll(".section");
    let links = document.querySelectorAll(".links a");
    for(let x = 0;x<links.length;x++){
        links[x].addEventListener("click",()=>{
        screens(x)
    })
    }



}
//Add Items


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
    addStock("Car", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
    addStock("Skates","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
    addStock("Bike", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
    addStock("Car", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
    addStock("Skates","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
    addStock("Bike", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio deserunt numquam sapiente veritatis ducimus. Quaerat, beatae soluta. Rem assumenda maxime, facere vero amet corrupti cupiditate nobis in placeat nemo.", "https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/", 170.99);
}

function addItems(){
    let item = document.querySelectorAll(".addItems input");
    console.log(item[0].value)
    addStock(item[0].value,item[1].value,item[2].value,item[3].value)
}
//ViewItems
function addCards(){

    let mainDisplay = document.querySelector(".cards");
    let card;
    let cardBody;
    let cardHeader;
    let cardFooter;
    
    for (let x = 0; x < stock.length; x++){
        // Create card
        card = document.createElement("div");
        // Create parts of card
        cardHeader = document.createElement("div");
        cardBody = document.createElement("img");
        cardFooter = document.createElement("div")
        // Adds cards and sub-elements
        card.classList.add("card");
        cardHeader.classList.add("card-header");
        cardBody.classList.add("card-body");
        cardFooter.classList.add("card-footer");
    
        cardHeader.textContent = stock[x].name;
        cardBody.src = stock[x].picture;
        cardFooter.textContent = "£ "+stock[x].price;
    
        // Adds card Items to card
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
    
        //Adds Event Listener to card
        card.addEventListener("click", (e) => { 
            
            

        })
        

        //Adds card to page
        mainDisplay.appendChild(card)
    }

}


// function wogDisplay(name, desc, price, image) {
//     let mainDisplay = document.querySelector(".cards");
//     let sideDisplay = document.querySelector(".itemInset");
//     sideDisplay.style.display = "block";
//     sideDisplay.style.position = "sticky";
//     sideDisplay.style.width = "30%";
//     mainDisplay.style.width = "70%";

//     document.querySelector(".itemInset .heading-1").innerHTML = name;
//     document.querySelector(".itemInset .description").innerHTML = desc;
//     document.querySelector(".itemInset .price").innerHTML = "£"+price;
//     document.querySelector(".itemInset .picture").src = image;
//     document.querySelector(".itemInset .close").addEventListener("click", () => {
//         sideDisplay.style.display = "none";
//         mainDisplay.style.width = "100%";
//     })
    
// }


function startup(){
    toolbarLinks();
    start();
    document.querySelector(".closeAdmin").addEventListener("click", ()=>{screens(1)})
    document.querySelector(".addStock").addEventListener("click",()=>{addItems();})
    for(let x = 0;x<stock.length;x++){
        console.log(stock[x].name,stock[x].price)
    }
    addCards();
}
startup()