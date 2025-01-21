'use strict'

let ulParentElement = document.querySelector('.task-menu');
const textBtn = document.querySelector('.text-btn');

ulParentElement.onclick = (event) => {
    if (event.target.classList.contains('task-btn')) {
        event.target.parentElement.remove();
    }
}

textBtn.addEventListener('click', () => {
  const inputTextVal = document.querySelector('.input-text').value;
  if (inputTextVal.trim() !== '') {
    const appendIt = document.createElement('li');
    appendIt.innerHTML = inputTextVal + ' <button class="">Видалити</button>';
    ulParentElement.append(appendIt);  
  } 
});
