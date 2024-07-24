const inputId = document.querySelector('.js-input-area');
const radioBtn = document.querySelector('.js-radio-button');

function handleInputs(){

  radioBtn.addEventListener('click', () => {
    if(inputId.value.trim() === ''){
      document.querySelector('.js-error-msg').classList.add('error-msg-display');
      document.querySelector('.js-error-msg').classList.remove('error-msg');
      radioBtn.checked = false;
    }
    else{
      document.querySelector('.js-error-msg').classList.add('error-msg');
      document.querySelector('.input-area').classList.add('input-area-mark');
      localStorage.setItem('input', JSON.stringify(inputId.value.trim()));
    }
    
  })
}
handleInputs();
handleInputs();
handleInputs();