
const modalMain = document.getElementById("subscribe-modal");
const close = document.getElementsByClassName("modal__close_times")[0];
const modalActive = "modal_active";



if (document.cookie !== 'menu=closed') {
  modalMain.classList.add(modalActive);
}
close.onclick = function() {
  modalMain.classList.remove(modalActive);
  document.cookie = 'menu=closed';
}


