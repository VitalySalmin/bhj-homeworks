const makeActiveClass = "menu_active";
const menuLinks = document.getElementsByClassName("menu__link"); 
const menuItems = document.getElementsByClassName("menu_sub");

let currentlyOpenedMenu;
Array.from(menuLinks).forEach(function(menuLink) {
  const parent = menuLink.parentElement.querySelector(".menu_sub");
  menuLink.onclick = function() {
    Array.from(menuItems).forEach(function(menuItem) {
      if(menuItem.classList.contains(makeActiveClass)) {
        menuItem.classList.remove(makeActiveClass)
      }
    })
      
    if ( parent &&  (currentlyOpenedMenu != parent)) {
      parent.classList.add(makeActiveClass);
      currentlyOpenedMenu = parent;
      return false;
    } else if(parent &&  (currentlyOpenedMenu == parent)) {
      currentlyOpenedMenu = "no menu opened";
      return false;
    } else {
      return false;
    }
  }
})

    
