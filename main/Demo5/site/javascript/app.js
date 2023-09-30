// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}


// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            
                                
const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }



// checks if an element is visible on the screen and applies the appropriate css animation on it
const hiddenElements = document.querySelectorAll('.hidden');

const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));     




// Checks to see which one of the 5 pictures on the recipes page are clicked and appropriately redirects
const picButton = document.querySelectorAll('.pic-button');

picButton.forEach(button);

function button(buttonClicked) {
    buttonClicked.addEventListener('click', () => {
        let buttonChild = Array.from(buttonClicked.parentNode.children).indexOf(buttonClicked);
        switch (buttonChild) {
            case 0:
                window.location.href = "recipes/recipe1.html";
              break;
            case 1:
                window.location.href = "recipes/recipe2.html";
              break;
            case 2:
                window.location.href = "recipes/recipe3.html";
              break;
            case 3:
                window.location.href = "recipes/recipe4.html";
              break;
            case 4:
                window.location.href = "recipes/recipe5.html";
              break;
          };
    });
};




// language options menu button
const selectLanguage = document.querySelector('#language-svg-container');
const languageOptions = document.querySelector('.unrevealed');

selectLanguage.addEventListener('click', () => {
    languageOptions.classList.toggle('visible');
});




// language selection buttons
const cookieEn = document.querySelector('.cookieEn');
const cookieGr = document.querySelector('.cookieGr');

cookieEn.addEventListener('click', () => {
    let websitePage = JSON.stringify(window.location.pathname);
    let websitePageGreekToEnglish = websitePage.replace('gr', 'en');

    Cookies.set('lang', 'en', { expires: 30 });
    Cookies.set('loaded', 'true', { expires: 30 });
    
    window.location.href = JSON.parse(websitePageGreekToEnglish);
});

cookieGr.addEventListener('click', () => {
    let websitePage = JSON.stringify(window.location.pathname);
    let websitePageEnglishToGreek = websitePage.replace('en', 'gr');

    Cookies.set('lang', 'gr', { expires: 30 });
    Cookies.set('loaded', 'true', { expires: 30 });

    window.location.href = JSON.parse(websitePageEnglishToGreek);
})