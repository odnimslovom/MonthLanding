"use strict";


let dotsAdvantages = document.querySelectorAll(".advantages__controls-point");
let blocksAdvantages = document.querySelectorAll(".advantages__block");

dotsAdvantages.forEach((dot, index) => {
  dot.addEventListener('click', () => showBlockAdv(index));
});

function showBlockAdv(index) {
  blocksAdvantages.forEach(block => block.classList.remove('advantages__block_active'));
  dotsAdvantages.forEach(dot => dot.classList.remove('advantages__controls-point_active'));
  blocksAdvantages[index].classList.add('advantages__block_active');
  dotsAdvantages[index].classList.add('advantages__controls-point_active');
}

let dotsCase = document.querySelectorAll(".case__controls-point");
let blocksCase = document.querySelectorAll(".case__slider-block");

dotsCase.forEach((dot, index) => {
  dot.addEventListener('click', () => showBlockCase(index));
});

function showBlockCase(index) {
  blocksCase.forEach(block => block.classList.remove('case__slider-block_active'));
  dotsCase.forEach(dot => dot.classList.remove('case__controls-point_active'));
  blocksCase[index].classList.add('case__slider-block_active');
  dotsCase[index].classList.add('case__controls-point_active');
}

let dotsMoreAdvantages = document.querySelectorAll(".more-advantages__controls-point");
let blocksMoreAdvantages = document.querySelectorAll(".more-advantages__block");

dotsMoreAdvantages.forEach((dot, index) => {
  dot.addEventListener('click', () => showBlockMoreAdv(index));
});

function showBlockMoreAdv(index) {
  blocksMoreAdvantages.forEach(block => block.classList.remove('more-advantages__block_active'));
  dotsMoreAdvantages.forEach(dot => dot.classList.remove('more-advantages__controls-point_active'));
  blocksMoreAdvantages[index].classList.add('more-advantages__block_active');
  dotsMoreAdvantages[index].classList.add('more-advantages__controls-point_active');
}


