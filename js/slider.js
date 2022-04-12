const sliders = document.querySelectorAll('.slider');

sliders.forEach( slider => initSlider(slider));

function initSlider(slider) {
  let sliderBlocks = slider.querySelectorAll('.slider__block');
  let sliderDots = slider.querySelectorAll('.button_type_dot');

  sliderDots.forEach( (dot, index) => {
    dot.addEventListener('click', () => showBlock(index));
  })

  function showBlock(index) {
    sliderBlocks.forEach( sliderBlock => sliderBlock.classList.remove('slider__block_active'));
    sliderDots.forEach(sliderDot => sliderDot.classList.remove('button_type_dot-active'));
    sliderBlocks[index].classList.add('slider__block_active');
    sliderDots[index].classList.add('button_type_dot-active');
  }
}
