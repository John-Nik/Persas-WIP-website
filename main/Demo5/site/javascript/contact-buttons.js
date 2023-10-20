const addressBtn = document.querySelectorAll('.address-btn');
const emailBtn = document.querySelectorAll('.email-btn');
const phoneBtn = document.querySelectorAll('.phone-btn');

addressBtn.forEach(buttonAddress);
emailBtn.forEach(buttonEmail);
phoneBtn.forEach(buttonPhone);

function buttonAddress(btnclicked) {
    btnclicked.addEventListener('click', () => {
        window.location = 'https://maps.app.goo.gl/qMiSY7833BbtYS6m6';
        console.log('button address clicked');
    });
};

function buttonPhone(btnclicked) {
    btnclicked.addEventListener('click', () => {
        window.location.href = 'tel:0035799457879';
        console.log('button phone clicked');
    });
};

function buttonEmail(btnclicked) {
    btnclicked.addEventListener('click', () => {
        window.location.href = 'mailto:persaco@hotmail.com';
        console.log('button email clicked');
    });
};

console.log('contact-buttons.js has been successfully loaded');