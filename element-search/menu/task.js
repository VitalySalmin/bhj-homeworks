const makeActiveClass = "menu_active";
const menuLinks = document.querySelectorAll(".menu__link"); 

[...menuLinks].forEach(function(menuLink) {
  menuLink.onclick = function() {
    [...menuLinks].forEach(function(menuLink) {
      try {
        menuLink.parentElement.childNodes[3].classList.remove(makeActiveClass);
        //console.log("removed in " + menuLink);
        return false;
      } finally {
      	//console.log("nothing to remove in " + menuLink);
      	return false;
      }
    })
    try {
      //console.log("trying to add")
      menuLink.parentElement.childNodes[3].classList.add(makeActiveClass);
      return false;
    } finally {
      //console.log("no sub-menu")
      return false;
    }
  }
})
    
