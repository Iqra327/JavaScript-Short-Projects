const inputValues = document.getElementById('inputId');
const btnElement = document.querySelectorAll('button');

let result = "";
let arr = Array.from(btnElement);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML === '='){
      result = eval(result);
      inputValues.value = result;
    }
    else if(e.target.innerHTML === 'AC'){
      result = '';
      inputValues.value = result;
    }
    else if(e.target.innerHTML === 'DEL'){
      result = result.substring(0, result.length-1);
      inputValues.value = result;
    }
    else{
      result += e.target.innerHTML;
      inputValues.value = result;
    }
  })
})
