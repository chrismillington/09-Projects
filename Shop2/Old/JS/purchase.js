document.querySelector(".basket-button-purchase").addEventListener("click", () => {
    let error = document.querySelector(".basket-msg-error");
    let street = document.querySelector(".basket-input-street")
    let town = document.querySelector(".basket-input-town")
    let postcode = document.querySelector(".basket-input-postcode")
    let name = document.querySelector(".basket-input-name")
   
    if ( name.value.length === 0 )
        error.innerHTML += "You should enter a name"
    else if (street.value.length ===0)
        error.innerHTML += "You should enter a Street"
    else if (town.value.length ===0)
        error.innerHTML += "You should enter a town"
    else if (postcode.value.length ===0)
        error.innerHTML += "You should enter a postcode"
    else
        document.querySelector(".basket-right").style.visibility = "visible";

   

})