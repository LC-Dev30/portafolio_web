//1* titulo de logo //
let title = document.querySelector('.title');
let body = document.getElementById("main")
title.innerText = '<>Mi Portafolio</>';

//2* Boton toggle al menu en modo mobile //
const nav = document.querySelector(".list-nav");
const btnOpen = document.querySelector(".btn-open-toggle");
const btnClose = document.querySelector(".btn-close-toggle")

function menuToggle() {
    nav.classList.toggle("navToggle")
    body.classList.toggle("visibleMain")
}

btnOpen.addEventListener("click", menuToggle);
btnClose.addEventListener("click", menuToggle);

//#3 ocurtar menu al hacer scroll //
function hacerScroll() {
    let captutarScroll = window.pageYOffset;

    window.onscroll = function () {
        let actualScroll = window.pageYOffset;

        if (captutarScroll >= actualScroll) {

            document.getElementById('menu').style.top = "0";
            document.getElementById('menu').style.boxShadow = "1px 1px 10px 2px black";
        } else {
            document.getElementById('menu').style.top = "-100px"
        }

        captutarScroll = actualScroll;

        //   ocurtar sombra  de header si el scroll esta en 0.
        if (actualScroll === 0) {
            document.getElementById('menu').style.boxShadow = "none"
            document.getElementById('menu').style.background = "none"
        }
    }

}
hacerScroll()

