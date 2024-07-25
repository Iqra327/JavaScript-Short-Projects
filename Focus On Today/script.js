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

//if click on the checkbox(js-checkbox){
//   checks if there is no text in any one of the input field(js-input-area), 
// then shows the error, adds the error class
//else if there is text in all the fields,  
//if there is text , then adds the completed task class in the current input div
//also increase the bar width as one task completed and change the counting , 
//}


// const allCheckbox = document.querySelectorAll('.js-checkbox');
// const allInputs = document.querySelectorAll('.js-input-area').value;

// const inputContainer = document.querySelectorAll('.input-div');

// allCheckbox.forEach((element) => { 
//    element.addEventListener('click', () =>{
//     // const inputValue = allInputs;
//     if(allInputs.length() == 0){
//       console.log('error msg');
//     }
//     else
//     {
//       console.log('it have some data ');
//     }
//    })
// });

// const allCheckboxes = document.querySelectorAll('.js-checkbox');
// const allInputs = document.querySelectorAll('.js-input-area');

// const inputContainers = document.querySelectorAll('.input-div');

// allCheckboxes.forEach((checkbox, index) => {
//   checkbox.addEventListener('click', () => {
//     // Ensure you get the corresponding input field
//     const input = allInputs[index];
    
//     // Check if the input field has data
//     if (input.value.trim() === '') {
//       console.log('The input field is empty');
//     } else {
//       console.log('The input field has some data');
//     }
//   });
// });


const checkboxList = document.querySelectorAll('.js-checkbox');
const inputFields = document.querySelectorAll('.js-input-area');
const errorLabel = document.querySelector('.js-error-msg');

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    let allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    })
    if(allGoalsAdded){
      checkbox.parentElement.classList.toggle('completed-task');
    }
    else{
      errorLabel.classList.remove('error-msg');
      errorLabel.classList.add('error-msg-display');
    }
  })
})


inputFields.forEach((input) => {
  input.addEventListener('focus', () => {
    errorLabel.classList.add('error-msg');
  })
})