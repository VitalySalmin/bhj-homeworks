const activeTab = "tab_active";
const activeContentPart = "tab__content_active";
const tabs = document.getElementsByClassName("tab"); 
const contentParts = document.getElementsByClassName("tab__content");

Array.from(tabs).forEach(function(tab) {
  //const parent = menuLink.parentElement.querySelector(".menu_sub");
  tab.onclick = function() {
    let tabIndex = Array.from(tabs).indexOf(tab);
    Array.from(tabs).forEach(function(tab) {
      if(tab.classList.contains(activeTab)) {
        tab.classList.remove(activeTab)
      }
    })
    Array.from(contentParts).forEach(function(contentPart) {
      if(contentPart.classList.contains(activeContentPart)) {
        contentPart.classList.remove(activeContentPart)
      }
    })
      
  tab.classList.add(activeTab)
  Array.from(contentParts)[tabIndex].classList.add(activeContentPart)
  }
})