const day = dayjs();
const currentDay = day.format('MMMM D, dddd');

document.querySelector('.today-text').innerHTML = `${currentDay}`;

const checkboxList = document.querySelectorAll('.js-checkbox');
const inputFields = document.querySelectorAll('.js-input-area');
const errorLabel = document.querySelector('.js-error-msg');
const progressBar = document.querySelector('.progress-value');

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    let allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    })
    if(allGoalsAdded){
      checkbox.parentElement.classList.toggle('completed-task');
      progressBar.style.width = '50%';
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      SaveToStorage();
    }
    else{
      checkbox.parentElement.classList.remove('completed-task');
      errorLabel.classList.remove('error-msg');
      errorLabel.classList.add('error-msg-display');
    }
  })
});


inputFields.forEach((input) => {

  input.value = allGoals[input.id].name;
  
  if(allGoals[input.id].completed){
    input.parentElement.classList.add('completed-task');
  }

  input.addEventListener('focus', () => {
    errorLabel.classList.add('error-msg');
  })
  input.addEventListener('mouseover', () => {
    input.parentElement.classList.add('inputDiv-border');
  })
  input.addEventListener('mouseout', () => {
    input.parentElement.classList.remove('inputDiv-border');
  })
  input.addEventListener('input', (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false
    }
   SaveToStorage();
  })

})

function SaveToStorage(){
  localStorage.setItem('allGoals', JSON.stringify(allGoals));
}