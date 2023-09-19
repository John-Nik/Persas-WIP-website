// ============================ Hero Section Button Code ============================
const bookNowButtonVis = document.querySelector('#background-button-vis');
const bookNowButtonInvis = document.querySelector('#background-button-invis');
const bookNowButton =  document.querySelector('.book-now-button');


bookNowButton.addEventListener('mouseenter', () => {
    bookNowButtonInvis.style.transform = 'scale(1,1)';
})

bookNowButton.addEventListener('mouseleave', () => {
    bookNowButtonInvis.style.transform = 'scale(0,0)';
})
// ============================ Hero Section Button Code ============================




// ============================ Nav Bar Code ============================
const nav = document.querySelector('nav.sticky');
const navBar = document.querySelector('nav');
const logo = document.querySelector('#logo-img-container-sticky');

window.addEventListener('scroll', () => {
    nav.classList.add('visible', window.scrollY > 120);
});

window.addEventListener('scroll', () => {
    nav.classList.remove('visible', window.scrollY < 110);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        navBar.style.opacity = "0";
        navBar.style.transform = ('scale(1.5,1.5)', 'translateX(-10px)', 'translateY(10px)');
        logo.style.opacity = "1";
    } else {
        navBar.style.opacity = "1"
        navBar.style.transform = 'scale(1,1)', 'translateX(0px)', 'translateY(0px)';
        logo.style.opacity = "0";
    }
});
// ============================ Nav Bar Code ============================