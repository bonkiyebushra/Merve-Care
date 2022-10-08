// isMenuActive = false;
let popupMenu = document.getElementById("nav_area");

function handleCloseButtonClick () {
    popupMenu.style.display = "none"
}

document.addEventListener("click",(e)=> {
    
    const isClosest = e.target.closest("#nav_area")
    if(!isClosest && e.target.id != "menu_bar"  && popupMenu.style.display == "flex" ) {
        popupMenu.style.display = "none"
    }
})


function handleMenuClick() {
    popupMenu.style.display = "flex"
}