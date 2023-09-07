const buttons = document.querySelectorAll('.map-button');

function handleButtonClick() {
  const button = this;
  if(button.classList.value.includes('map-button_opened')) {
    buttonClose(button);
  }else {
    buttonOpen(button);
  }
};

function buttonOpen(button) {
  const text = button.querySelector('.text');
  const icon = button.querySelector('.button__icon');
  button.classList.add('map-button_opened');
  icon.classList.remove('button__icon_close')
  text.classList.remove('text_hidden');
};

function buttonClose(button) {
  const text = button.querySelector('.text');
  const icon = button.querySelector('.button__icon');
  button.classList.remove('map-button_opened');
  icon.classList.add('button__icon_close')
  text.classList.add('text_hidden');
};

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});
