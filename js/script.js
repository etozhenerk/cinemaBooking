"use strict";

const schemeSvg = document.querySelector(".scheme__svg");
const priceTotalTag = document.querySelector('.price__total');


let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener("click", (e) => {

    const target = e.target;
    if (!target.classList.contains("booked")) {
        target.classList.toggle("active");
        let acrive = schemeSvg.querySelectorAll('.active').length;
        totalPrice = acrive * cost;
        priceTotalTag.textContent = totalPrice;
    }
});
