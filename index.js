// isMenuActive = false;

function handleMenuClick() {

    let isMenuActive = document.getElementById("nav_area").style.display == "flex";

    if(isMenuActive) {
        document.getElementById("nav_area").style.display = "none"
    } else {
        document.getElementById("nav_area").style.display = "flex"
    }
    isMenuActive =!isMenuActive;
}