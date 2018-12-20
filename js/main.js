var btnTop = document.querySelector('.btn-back-to-top');
var menuHeader = document.querySelector('.container-menu-header');

btnTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

window.onscroll = function () {
    var windowHeight = window.innerHeight;

    if (window.pageYOffset > windowHeight) {
        btnTop.style.display = "flex"
    } else {
        btnTop.style.display = "none"
    }

    stickyMenu();
};

function stickyMenu() {
    var headerHeight = menuHeader.offsetHeight;

    if (window.pageYOffset > headerHeight) {
        menuHeader.classList.add('sticky');
    } else {
        menuHeader.classList.remove('sticky');
    }

}
