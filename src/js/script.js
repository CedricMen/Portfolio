document.addEventListener("DOMContentLoaded", function (event) {

    //menu
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

    //curseur
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style","top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

    document.addEventListener('click', () => {
        cursor.classList.add("expand")

        setTimeout(() => {
            cursor.classList.remove("expand")
        },500)
    })

    //test
    console.log("Ça fonctionne!!!");


});