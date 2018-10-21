'use strict';
function toogleSideMenu() {
    var menuOpened = false;
    var sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("--closed");
}