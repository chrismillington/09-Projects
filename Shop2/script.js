// Screens
screens(1);
function screens(num) {
    let screens = document.querySelectorAll(".mainScreen");
    console.log(screens)
    for (let x in screens) {
        screens[x].style.display = "none";
    }
    // screens[num].style.display = "block";
}

// Toolbar



// Add Items



// View Items


// Order Items


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
