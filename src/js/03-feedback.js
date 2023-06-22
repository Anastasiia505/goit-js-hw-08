import throttle from 'lodash.throttle';

formEl = document.querySelector('.feedback-form');
textAreaEl = document.querySelector('textarea');
emailEl=document.querySelector('input[name="email"]')
formEl = addEventListener('submit', onFormSubmit);
formEl = addEventListener("input", throttle(onFormInput,500));
const formData = {};
const STORAGE_KEY = "feedback-form-state";
populateInput();

function onFormInput(e) {
    formData.email = emailEl.value;
    formData.message = textAreaEl.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
    
      
function populateInput() {
    
    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedInput) {
        emailEl.value = savedInput.email;
        textAreaEl.value = savedInput.message;
    }
}
function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    }
