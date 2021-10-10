"use strict";

const schemeSvg = document.querySelector(".scheme__svg");
schemeSvg.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("booked")) {
        target.classList.toggle("active");
    }
});
