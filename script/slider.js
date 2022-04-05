const sliders = document.querySelectorAll('.slider');

sliders.forEach( slider => initSlider(slider));

function initSlider(slider) {
  let sliderBlocks = slider.querySelectorAll('.slider__block');
  let sliderDots = slider.querySelectorAll('.slider__controls-dot');

  sliderDots.forEach( (dot, index) => {
    dot.addEventListener('click', () => showBlock(index));
  })

  function showBlock(index) {
    sliderBlocks.forEach( sliderBlock => sliderBlock.classList.remove('slider__block_active'));
    sliderDots.forEach(sliderDot => sliderDot.classList.remove('slider__controls-dot_active'));
    sliderBlocks[index].classList.add('slider__block_active');
    sliderDots[index].classList.add('slider__controls-dot_active');
  }
}
