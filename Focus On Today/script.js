const day = dayjs();
const currentDay = day.format('MMMM D, dddd');

document.querySelector('.today-text').innerHTML = `${currentDay}`;


const checkboxList = document.querySelectorAll('.js-checkbox');
const inputFields = document.querySelectorAll('.js-input-area');
const errorLabel = document.querySelector('.js-error-msg');
const progressValue = document.querySelector('.progress-value');
const goalBar = document.querySelector('.js-goalBar');
const barTitle = document.querySelector('.js-bar-title');
const belowTitle = document.querySelector('.js-belowTitle');


const allTitles = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'Just a step away, keep going!',
  'Whoa! You just completed all the goals, time for chill :)'
]
const allBelowTitles = [
  '"Move one step ahead, today!"',
  "Keep Going, You're making great progress!",
  "Keep Going, You're making great progress!",
  "Keep Going, You're making great progress!",
  "Keep Going, You're making great progress!"
]

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
  first: { 
    name: '', 
    completed: false 
  },
  second: { name: '', completed: false },
  third: { name: '', completed: false },
  forth: { name: '', completed: false }
};
progressValue.style.width = `${(goalsCount() / 4) * 100}%`;
goalBar.innerText = `${goalsCount()}/4 Completed`;
barTitle.innerHTML = allTitles[goalsCount()];
belowTitle.innerHTML = allBelowTitles[goalsCount()];

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    let allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    })
    if(allGoalsAdded){
      checkbox.parentElement.classList.toggle('completed-task');
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      goalsCount();
      progressValue.style.width = `${(goalsCount() / 4) * 100}%`;
      barTitle.innerHTML = allTitles[goalsCount()];
      belowTitle.innerHTML = allBelowTitles[goalsCount()];
      goalBar.innerText = `${goalsCount()}/4 Completed`;
      SaveToStorage();
      
    }
    else
    {
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
    if(allGoals[input.id].completed){
      input.value = allGoals[input.id].name
      return;
    }
    allGoals[input.id].name = input.value;

   SaveToStorage();
  })

})

function SaveToStorage(){
  localStorage.setItem('allGoals', JSON.stringify(allGoals));
}

function goalsCount(){
  let completedGoalsCount = Object.values(allGoals).filter((count) => count.completed).length;
  return completedGoalsCount;
};
