let page2 = document.querySelector(".page2");
let cards = document.querySelectorAll(".card");

let dogs = ["Rilla","Higgsy","Sunny"];
cards.forEach((card,index)=>{
        card.addEventListener("click",()=>{
        console.log(index);
        
    })
});

const para = document.appendChild(".page2");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

    

