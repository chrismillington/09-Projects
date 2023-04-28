
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => { 
    if (document.querySelector(".viewItems-section-detailedView").style.display === "none")
        wogDisplay(true);
    else
        wogDisplay (false);
    })
})


function wogDisplay(bool) {
    console.log(bool);
    if (bool === true)
        document.querySelector(".viewItems-section-detailedView").style.display = "block";
    else {
        document.querySelector(".viewItems-section-detailedView").style.display = "none";
    }
}

