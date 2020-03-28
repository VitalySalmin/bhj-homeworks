/* я использовал querySelector - т.к. при нем можно получить сам элемент по классу, 
если он 1 (или нужен 1й) - а так я всегда получаю массивоподобный объект,
и даже для единственного/первого элемента приходиться индекс писать */

const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const close = document.getElementsByClassName("modal__close_times")[0];
const success = document.getElementsByClassName("show_success")[0];
const closeSuccess = document.getElementsByClassName("modal__close_times")[1];
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