// const inputId = document.querySelector('.js-input-area');
// const checkbox = document.querySelector('.js-checkbox');

// function handleInputs(){

//   checkbox.addEventListener('click', () => {
//     if(inputId.value.trim() === ''){
//       document.querySelector('.js-error-msg').classList.add('error-msg-display');
//       document.querySelector('.js-error-msg').classList.remove('error-msg');
//       radioBtn.checked = false;
//     }
//     else{
//       document.querySelector('.js-error-msg').classList.add('error-msg');
//       document.querySelector('.input-div').classList.add('completed-task');
//       localStorage.setItem('input', JSON.stringify(inputId.value.trim()));
//     }
    
//   })
// }
// handleInputs();
// handleInputs();
// handleInputs();

// const inputId = document.querySelectorAll('.js-input-area');
// const checkboxList = document.querySelectorAll('.js-checkbox');

// checkboxList.forEach((checkbox) => {
//   checkbox.addEventListener('click', () => {
//     if(inputId.value === ''){
//       checkbox.parentElement.classList.toggle('completed-task');
      
//     }
//     else
//     {
//       document.querySelector('.js-error-msg').classList.add('error-msg-display'); 
//       document.querySelector('.js-error-msg').classList.remove('error-msg'); 

//     }
           
//   })
// })