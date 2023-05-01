const stock = [];
function addStock(itemName,itemDescription,itemPicture,itemPrice){
    stock.push({name: itemName , description:
        itemDescription,picture:itemPicture,price:
        itemPrice })

}
addStock("Car", "Twin exhaust = Wheelbarrow","https://cdn.imagin.studio/getImage?&customer=carwow&tailoring=carwow&make=volvo&modelFamily=xc40&modelRange=recharge&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0188&fileType=png&zoomType=fullscreen&width=800&angle=23&billingTag=web",5275)
addStock("Skates","Penguin sized","https://cdn.shopify.com/s/files/1/0331/9201/8057/products/graf-500-figure-ice-skates-white-figure-skates-29164679233685_600x.jpg?v=1647325087",17.99 )
addStock("Bike" , "Big and Blue","https://i.shgcdn.com/fe14ddba-4af4-4e0f-aa6c-dfc91890cef2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",170.99 )
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
    document.querySelector(".buyItemLink").addEventListener("click",()=>{
        viewItems(true)
        burgerMenu.style.display = "none"
    });
    document.querySelector(".addItemsLink").addEventListener("click",()=>{
        addItems(true)
        burgerMenu.style.display = "none";
    });


}
function addItems(Visible){
    console.log("Loaded")
    const addItems = document.querySelector(".addItems");
    addItems.style.display = "flex";

    document.querySelector(".addObject").addEventListener("click",()=>{
        addItem();
    });

    document.querySelector(".subBttn").addEventListener("click",()=>{
        if(document.querySelector(".itemNameInput").value !="")
            addItem()
        document.querySelector(".addItems").style.display = "none";
        console.log(stock);
    

    })
}
function addItem(){
    addStock(document.querySelector(".itemNameInput"),document.querySelector(".ItemInfoTA"),document.querySelector("#picUpload"),document.querySelector("#salesPrice"))
    let controls = [".itemNameInput",".ItemInfoTA","#salesPrice","#picUpload"];
    for(let x in controls){
        document.querySelector(controls[x]).value = "";
    }
}
function viewItems(Visible){

    let shopWindow = document.querySelector(".displayItems");
    shopWindow.style.display = "flex";
    console.log("Viewing Items")
    let title = document.createElement("h1");
    title.innerText = "Jerusalem";
    shopWindow.appendChild(title)
}
function purchaseItems(Visible){

}

