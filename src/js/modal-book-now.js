const refs = {
  openModalBtn: document.querySelector('[data-modal-open-booking]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

// ------------------
// function getRefs() {
//   return {
//     buttonOpenModal: document.querySelector('.modal-open'),
//     buttonCloseModal: document.querySelector('.close-modal'),
//     backdrop: document.querySelector('.backdrop'),
//   };
// }
// const refs = getRefs();
// refs.buttonOpenModal.addEventListener('click', onOpenModalClick);
// refs.buttonCloseModal.addEventListener('click', onCloseModalClick);
// refs.backdrop.addEventListener('click', onBackdropClick);
// function onOpenModalClick(e) {
//   openModal();
// }
// function openModal() {
//   console.dir(refs.backdrop);
//   refs.backdrop.classList.remove('is-hidden');
//   window.addEventListener('keydown', onEscapeClick);
// }
// function closeModal() {
//   refs.backdrop.classList.add('is-hidden');
//   window.removeEventListener('keydown', onEscapeClick);
// }
// function onCloseModalClick(e) {
//   closeModal();
// }
// function onBackdropClick(e) {
//   if (e.target === e.currentTarget) {
//     closeModal();
//   }
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
// }
// function onEscapeClick(e) {
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// }
