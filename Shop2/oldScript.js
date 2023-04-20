const itemName = ["Bike","Car","Skates"];
const itemDesc = ["Big and Blue","Twin exhaust = Wheelbarrow","Penguin sized"];
const itemPic = ["https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087"];
const itemPrice=[170.99,5275,17.99];

loadScreen();
// Set Screens
function loadScreen(){
    const toolbar = document.querySelector(".toolbar");
    const burger = document.querySelector(".bger");
    toolbar.style.display = "Block";
    burger.addEventListener("click",()=>{
        console.log("One")
    });
    addItems();
}
function addItems(){
    const addItemsScreen = document.querySelector(".addItems");
    addItemsScreen.display.style = none;
document.querySelector(".addObject").addEventListener("click",()=>{
    let controls = [".itemNameInput",".ItemInfoTA","#salesPrice","#picUpload"];   
    itemName.push(document.querySelector(".itemNameInput").value);
    itemDesc.push(document.querySelector(".ItemInfoTA").value);
    itemPic.push(document.querySelector("#picUpload").value);
    itemPrice.push(document.querySelector("#salesPrice").value);
    for(let x in controls){
        document.querySelector(controls[x]).value = "";
    }
});

document.querySelector(".subBttn").addEventListener("click",()=>{
    document.querySelector(".addItems").style.display = "none";

    console.log(itemName);
    console.log(itemDesc);
    console.log(itemPic);
    console.log(itemPrice);
})

}
function displayItems(){
const displayItems = document.querySelector(".displayItems");
let card = displayItems.createElement(".card");

}
function orderItems(){
const infoOnItems = document.querySelector(".infoOnItems");
const purchaseItems = document.querySelector(".purchaseItems");
}
