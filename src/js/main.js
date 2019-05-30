let button = document.querySelector('#button'),
  modal = document.querySelector('#modal'),
  close = document.querySelector('#close'),
  timerId;

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  timerId = setTimeout(closeModal, 5000);
});

close.addEventListener('click', function() {
  clearTimeout(timerId);
  closeModal();
});

function closeModal() {
  modal.classList.remove('modal_active');
}
