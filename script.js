// created by : RENOLD ALVAN FUADY
// copyright RAF 

// Navbar
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
});
// End Navbar

