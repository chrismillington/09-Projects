// Toolbar
const addItemsScreen = document.querySelector(".addItem");
const viewItemsScreen = document.querySelector(".viewItems");
const basketScreen = document.querySelector(".basket");

const viewItemslink = document.querySelector(".toolbar-link-view");
const basketlink = document.querySelector(".toolbar-link-basket");
const addItemslink = document.querySelector(".toolbar-link-admin");

viewItemslink.addEventListener("click", () => {
    showScreen(0)
})
basketlink.addEventListener("click", () => {
    showScreen(1)
})
addItemslink.addEventListener("click", () => {
    showScreen(2)
})

function showScreen(num) {
    console.log("Clicked",num)
    addItemsScreen.style.display = "none";
    viewItemsScreen.style.display = "none";
    basketScreen.style.display = "none";

    if (num === 2)
        addItemsScreen.style.display = "block";
    else if (num === 0)
        viewItemsScreen.style.display = "block";
    else
        basketScreen.style.display = "block";
        
}

