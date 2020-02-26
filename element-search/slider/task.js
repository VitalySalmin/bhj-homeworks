const sliderItems = document.getElementsByClassName("slider__item");
const next = document.getElementsByClassName("slider__arrow_next")[0];
const prev = document.getElementsByClassName("slider__arrow_prev")[0];
const dots = document.getElementsByClassName("slider__dot");

/* если я правильно понял, переменная  вкл. в себя querySelector должна быть динамической. Но если я пытаюсь определить ее не внутри функции,
то он при первом клике, убирает _active class, добавляет его в такому же элементу с индексом на 1 больше, но
при следующем клике он опять считает, что индекс элемента с классом _active не изменился (переменная осталась неизменной), 
поэтому мне пришлось определять переменную по-новой при каждом клике  */

/* вы написали также, что мне нужно вызывать функцию, которая показывала бы активный слайд, но показ активного слайда сам по себе занимает 1 строку, 
я не совсем понял как/зачем должна быть реализована отдельная функция. Если бы мне не нужно было определять переменную,
в которой активный слайд при каждом клике заново, я бы сделал функцию, которая получает индекс активного элемента, убирает класс и к элементу с 
индексом на 1 больше класс добавляет - ообщем, как вы и сказали, после проверки  условий она бы вызывалась по клику - я думаю,
это то, что вы и имели ввиду, но сделать так я не смог*/
let getIndex = (arr, item) => {
  return Array.from(arr).indexOf(item);
}

dots[getIndex(sliderItems, document.querySelector(".slider__item_active"))].classList.add('slider__dot_active');
const activeDot = document.querySelector(".slider__dot_active");
//const activeDot = document.getElementsByClassName("slider__dot_active")[0];
//const activeSlide = document.getElementsByClassName("slider__item_active")[0];
//console.log(activeDot);


[...dots].forEach(function(dot) {
  dot.onclick = function() {
  const activeDot = document.querySelector(".slider__dot_active");
  activeDot.classList.remove("slider__dot_active");
  dot.classList.add("slider__dot_active");
  const activeDotIndex = getIndex(dots, activeDot);
  console.log(activeDotIndex);
  document.querySelector(".slider__item_active").classList.remove("slider__item_active");
  sliderItems[activeDotIndex + 1].classList.add("slider__item_active");
  }
})

next.onclick = function() {
  const activeDot = document.querySelector(".slider__dot_active");
  const activeSlide = document.querySelector(".slider__item_active");
  const activeSlideIndex = getIndex(sliderItems, activeSlide);
  const activeDotIndex = getIndex(dots, activeDot);
  activeSlide.classList.remove("slider__item_active");
  activeDot.classList.remove("slider__dot_active");
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
  const activeDot = document.querySelector(".slider__dot_active");
  const activeSlide = document.querySelector(".slider__item_active");
  const activeSlideIndex = getIndex(sliderItems, activeSlide);
  const activeDotIndex = getIndex(dots, activeDot);
  activeSlide.classList.remove("slider__item_active");
  activeDot.classList.remove("slider__dot_active");
  if (activeSlideIndex == 0) {
    sliderItems[sliderItems.length - 1].classList.add("slider__item_active");
    dots[dots.length - 1].classList.add("slider__dot_active");
  } else {
    sliderItems[activeSlideIndex - 1].classList.add("slider__item_active");
    dots[activeDotIndex - 1].classList.add("slider__dot_active");
  }
}
