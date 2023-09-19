window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky2', window.scrollY > 950);
});