"use strict";

let dots = document.querySelectorAll(".advantages__controls-point");
let blocks = document.querySelectorAll(".advantages__block");

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showBlock(index));
});

function showBlock(index) {
  blocks.forEach(block => block.classList.remove('advantages__block_active'));
  dots.forEach(dot => dot.classList.remove('advantages__controls-point_active'));
  blocks[index].classList.add('advantages__block_active');
  dots[index].classList.add('advantages__controls-point_active');
}






