let elements = document.querySelectorAll(".reveal")

function unhide(){
	console.log(elements)
	const viewportHeight=window.innerHeight;
	Array.from(elements).forEach(function(element){
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if(elementTop < viewportHeight && elementBottom > 0) {
      element.classList.add("reveal_active")
    } else {
    	element.classList.remove("reveal_active");
    }
})
};

document.addEventListener("scroll", unhide);