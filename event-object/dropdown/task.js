const dropDownList = document.getElementsByClassName("dropdown__list")[0];
const mainMenuItem = document.getElementsByClassName("dropdown__value")[0];
const dropDownItems = document.getElementsByClassName("dropdown__item")

mainMenuItem.addEventListener('click', function() {
  if(dropDownList.classList.contains("dropdown__list_active")) {
    dropDownList.classList.remove("dropdown__list_active");
  } else {
    dropDownList.classList.add("dropdown__list_active");
  }
  [...dropDownItems].forEach(function(dropDownItem) {
    dropDownItem.addEventListener('click', function(event) {
      event.preventDefault();
      mainMenuItem.textContent = this.textContent;
      dropDownList.classList.remove("dropdown__list_active");
    })
  		
  })
})
