const tooltips = document.querySelectorAll(".has-tooltip")
const hrefs = document.getElementsByTagName("a")

Array.from(tooltips).forEach(function(tooltip) {
  tooltip.addEventListener("click", function(event){
  	event.preventDefault()
  	Array.from(tooltips).forEach(function(tooltip) {
      if(tooltip.children[0]) {
      	if(tooltip.children[0].classList.contains("tooltip_active")) {
      	tooltip.removeChild(tooltip.children[0])
        }
      }  
    })
    tooltip.insertAdjacentHTML("beforeEnd",
    	`<div class='tooltip tooltip_active' style='left: 0; top: 0'>${tooltip.title}</div>`);
  });
})