const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const close = document.querySelector(".modal__close_times");
const success = document.querySelector(".show_success");
const closeSuccess = document.querySelectorAll(".modal__close_times")[1];
const modalActive = "modal_active";
const modalClose = "modal_close";

modalMain.classList.add(modalActive);
close.onclick = function() {
	modalMain.classList.remove(modalActive)
};
success.onclick = function() {
  modalMain.classList.remove(modalActive);
  modalSuccess.classList.add(modalActive);
}
closeSuccess.onclick = function() {
	modalSuccess.classList.remove(modalActive)
};
