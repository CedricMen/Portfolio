document.addEventListener("DOMContentLoaded", function (event) {

    //menu
    var menu = document.querySelector('.menu');
    var closeMenu = document.querySelector('.closeMenu');


    menu.addEventListener('click', OpenMenu);
    closeMenu.addEventListener('click', CloseMenu);

    var sideNav = document.getElementById("mySidenav");
    var navBar = document.getElementById("navbar");

    function OpenMenu() {
        sideNav.style.width = '100%';
        sideNav.style.zIndex = '2';
        navBar.style.visibility = 'hidden';
        document.body.style.overflow = 'hidden';

    }

    function CloseMenu() {
        sideNav.style.width = '0%';
        sideNav.style.zIndex = '2';
        navBar.style.visibility = 'visible';
        navBar.style.zIndex = '1';
        document.body.style.overflow = 'visible';
    }

    //curseur
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
        })

    document.addEventListener('click', () => {
        cursor.classList.add("expand")

        setTimeout(() => {
            cursor.classList.remove("expand")
        },500)
    })


    //page loader
    const loader = document.querySelector('.loader')

    window.addEventListener('load', ()=>{

        loader.classList.add('fondu-out')

    })


    //test
    console.log("Ça fonctionne!!!");


});

