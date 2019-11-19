"use strict";
console.log("task-05");
// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector(`input#name-input`);
const outputName = document.querySelector(`span#name-output`);

inputName.addEventListener("input", changeOutput);
function changeOutput(event) {
  if (inputName.value !== "") {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = "незнакомец";
  }
}
