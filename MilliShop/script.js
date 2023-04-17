let page2 = document.querySelector(".page2");
let cards = document.querySelectorAll(".card");
const itemName = document.createElement("itemName");
const itemPic = document.createElement("itemPic");
const itemOrder = document.createElement("button");


let dogs = ["Rilla","Higgsy","Sunny"];
cards.forEach((card,index)=>{
    card.addEventListener("click", () => {
            page2.style.display = 'block';
            itemName.innerHTML = dogs[index];

            
    })
});
itemName.classList.add("heading-1");
itemOrder.innerHTML = "Hit me "

page2.appendChild(itemName);
page2.appendChild(itemOrder)




    

