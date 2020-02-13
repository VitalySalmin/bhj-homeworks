const sliderItems = document.querySelectorAll(".slider__item");
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");
const dots = document.querySelectorAll(".slider__dot");

for (let d = 0; d < [...dots].length; d++) {
  [...dots][d].onclick = function() {
    for (let i = 0; i < [...sliderItems].length; i++) {
      if([...sliderItems][i].classList.contains("slider__item_active")) {
        [...sliderItems][i].classList.remove("slider__item_active");
      }
    }
    [...sliderItems][d].classList.add("slider__item_active");
    for (let d = 0; d < [...dots].length; d++) {
      if([...dots][d].classList.contains("slider__dot_active")) {
        [...dots][d].classList.remove("slider__dot_active");
      }
    }
    [...dots][d].classList.add('slider__dot_active');
  }
}

next.onclick = function() {
  let current = 0;
  for (let i = 0; i < [...sliderItems].length; i++) {
   if([...sliderItems][i].classList.contains("slider__item_active")) {
     current = i;
     [...sliderItems][i].classList.remove("slider__item_active");
   }
  }
  if(current<([...sliderItems].length - 1)) {
  	[...sliderItems][current+1].classList.add("slider__item_active")
  	for (let d = 0; d < [...dots].length; d++) {
      if([...dots][d].classList.contains("slider__dot_active")) {
        [...dots][d].classList.remove("slider__dot_active");
      }
    }
    [...dots][current+1].classList.add('slider__dot_active');
  } else {
  	for (let d = 0; d < [...dots].length; d++) {
      if([...dots][d].classList.contains("slider__dot_active")) {
        [...dots][d].classList.remove("slider__dot_active");
      }
    }
    [...dots][0].classList.add('slider__dot_active');
  	[...sliderItems][0].classList.add("slider__item_active")
  }
}

prev.onclick = function() {
  let current = 0;
  for (let i = 0; i < [...sliderItems].length; i++) {
   if([...sliderItems][i].classList.contains("slider__item_active")) {
     current = i;
     [...sliderItems][i].classList.remove("slider__item_active");
   }
  }
  if(current == 0) {
  	[...sliderItems][[...sliderItems].length - 1].classList.add("slider__item_active")
  	for (let d = 0; d < [...dots].length; d++) {
      if([...dots][d].classList.contains("slider__dot_active")) {
        [...dots][d].classList.remove("slider__dot_active");
      }
    }
    [...dots][[...sliderItems].length - 1].classList.add('slider__dot_active');
  } else {
  	[...sliderItems][current-1].classList.add("slider__item_active")
  	for (let d = 0; d < [...dots].length; d++) {
      if([...dots][d].classList.contains("slider__dot_active")) {
        [...dots][d].classList.remove("slider__dot_active");
      }
    }
    [...dots][current-1].classList.add('slider__dot_active');
  }
}