document.addEventListener("DOMContentLoaded", function (event) {


    var menu = document.querySelector('.menu');
    var closeMenu = document.querySelector('.closeMenu');


    menu.addEventListener('click', OpenMenu);
    closeMenu.addEventListener('click', CloseMenu);

    var sideNav = document.getElementById("mySidenav");

    function OpenMenu() {
        sideNav.style.width = '100%';
    }

    function CloseMenu() {
        sideNav.style.width = '0%';
    }


    //test
    console.log("Ça fonctionne!!!");


});