let sliderContainer = document.querySelector("#section-5-cards-container");
let innerSlider = document.querySelector(".section-5-card");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - sliderContainer.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
    sliderContainer.style.cursor = "default";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

window.addEventListener("mouseup", () => {
    // pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    sliderContainer.style.left = `${x - startX}px`;

    checkBoundary();
});

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();

    if (parseInt(sliderContainer.style.left) > 0) {
        sliderContainer.style.left = "0px";
    }

    if (inner.right < outer.right) {
        sliderContainer.style.left = `-${inner.width - outer.width}px`;
    }
};
