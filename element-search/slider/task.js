/*я постарался убрать повторяющийся код, но функция смены  у меня все равно не выставляет активный слайд, 
т.к. она должна вызываться как при клике на точку, так и при клике на стрелку, но логика разная у них:
при клике на стрелку индекс увеличивется/уменьшается на 1, а при клике на точку индекс меняется на индекс точки*/

const sliderItems = document.getElementsByClassName("slider__item");
const next = document.getElementsByClassName("slider__arrow_next")[0];
const prev = document.getElementsByClassName("slider__arrow_prev")[0];
const dots = document.getElementsByClassName("slider__dot");
let activeDot 
let activeSlide 
let activeSlideIndex 
let activeDotIndex


let getIndex = (arr, item) => {
  return Array.from(arr).indexOf(item);
}

dots[getIndex(sliderItems, document.querySelector(".slider__item_active"))].classList.add('slider__dot_active');

function changeSlide() {
  activeDot = document.querySelector(".slider__dot_active");
  activeSlide = document.querySelector(".slider__item_active");
  activeSlideIndex = getIndex(sliderItems, activeSlide);
  activeDotIndex = getIndex(dots, activeDot);
  activeSlide.classList.remove("slider__item_active");
  activeDot.classList.remove("slider__dot_active");
}

[...dots].forEach(function(dot) {
  dot.onclick = function() {
  changeSlide();
  dot.classList.add("slider__dot_active");  
  sliderItems[getIndex(dots, dot)].classList.add("slider__item_active");
  }
})

next.onclick = function() {
  changeSlide();
  //console.log(activeDotIndex)
  if (Array.from(sliderItems).indexOf(activeSlide) < (sliderItems.length -1)) {
    sliderItems[activeSlideIndex + 1].classList.add("slider__item_active");
    dots[activeDotIndex + 1].classList.add("slider__dot_active");
    //console.log(activeDotIndex)
  } else {
    sliderItems[0].classList.add("slider__item_active");
    dots[0].classList.add('slider__dot_active');
  }
}

prev.onclick = function() {
  changeSlide();
  if (activeSlideIndex == 0) {
    sliderItems[sliderItems.length - 1].classList.add("slider__item_active");
    dots[dots.length - 1].classList.add("slider__dot_active");
  } else {
    sliderItems[activeSlideIndex - 1].classList.add("slider__item_active");
    dots[activeDotIndex - 1].classList.add("slider__dot_active");
  }
}
