const itemName = ["Bike","Car","Skates"];
const itemDesc = ["Big and Blue","Twin exhaust = Wheelbarrow","Penguin sized"];
const itemPic = ["https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087"];
const itemPrice=[170.99,5275,17.99];
toolbar();
function toolbar(){
    let toolbar = document.querySelector(".toolbar");
    let burger = document.querySelector(".burger");
    let burgerMenu = document.querySelector(".burgerMenu");
    burger.addEventListener("click",()=>{
        if(burgerMenu.style.display === "none")
            burgerMenu.style.display = "block";
        else
            burgerMenu.style.display = "none";
    })
    document.querySelector(".addItemsLink").addEventListener("click",()=>{
        addItems(true)
    })
}
function addItems(Visible){
    console.log("Loaded")
const addItems = document.querySelector(".addItems");
const displayItems = document.querySelector(".displayItems");
const infoOnItems = document.querySelector(".infoOnItems");
const purchaseItems = document.querySelector(".purchaseItems");
