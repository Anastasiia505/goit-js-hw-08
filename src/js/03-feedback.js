import throttle from 'lodash.throttle';

formEl = document.querySelector('.feedback-form');
textAreaEl = document.querySelector('textarea');
emailEl=document.querySelector('input[name="email"]')
// formEl = addEventListener('submit', onFormSubmit);

formEl = addEventListener("input", onFormInput);
const formData = {};

function onFormInput(e) {

    formData.email = emailEl.value;
    formData.message = textAreaEl.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
}
       
