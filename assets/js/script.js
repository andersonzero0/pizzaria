var menu_box = document.querySelector('.menu_box')
var menu_btn = document.getElementById("menu_btn")

menu_box.style.display = "none";

menu_btn.onclick = function showMenu() {
    if(menu_box.style.display === "none"){
        menu_box.style.display = "block"
    }else {
        menu_box.style.display = "none"
    }
}