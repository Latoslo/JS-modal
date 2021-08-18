const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeOnEscapeKeydown = (e) => {
  // if (e.key === 'Escape') {
  if (!modal.classList.contains("hidden") && e.keyCode === 27) {
    closeModal();
  }
};

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener("click", openModal);
// }
btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", closeOnEscapeKeydown);
