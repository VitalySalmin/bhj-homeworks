const makeActiveClass = "menu_active";
const menuLinks = document.getElementsByClassName("menu__link"); 

/* try/catch - вы меня уже ругали за него раньше:) - я буду избегать его впредь (где он не требуется по своему прямому предназначению)
Элемент menuLink.parentElement.chikdnodes[3] не магический - это подменю, его индекс как дочерней ноды я смотрел в хроме.
я думаю, что понимаю предназначение try/catch, мне просто казалось, что try/final,
в данном случае технически сделает тоже, что и условия - попробует применить к дочерней ноде действия + отменит переход по ссылке,
если ноды нет просто просто отменит переход*/
let currentlyOpenedMenu;
[...menuLinks].forEach(function(menuLink) {
  console.log(menuLink.parentElement)
  console.log(menuLink.parentElement.querySelector(".menu_sub"));
  menuLink.onclick = function() {
    Array.from(menuLinks).forEach(function(menuLink) {
      if ( menuLink.parentElement.querySelector(".menu_sub")) {
        menuLink.parentElement.querySelector(".menu_sub").classList.remove(makeActiveClass);
        //console.log("removed in " + menuLink);
        return false;
      } else {
      	//console.log("nothing to remove in " + menuLink);
      	return false;
      }
    })
    if ( menuLink.parentElement.querySelector(".menu_sub") &&  currentlyOpenedMenu != menuLink.parentElement.querySelector(".menu_sub")) {
      //console.log("trying to add")
      menuLink.parentElement.querySelector(".menu_sub").classList.add(makeActiveClass);
      currentlyOpenedMenu = menuLink.parentElement.querySelector(".menu_sub");
      return false;
    } else {
      //console.log("no sub-menu")
      return false;
    }
  }
})
    
