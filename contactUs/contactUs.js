let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('phone');
let subject = document.getElementById('subject');
let yourMessage = document.getElementById('yourMessage');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateInputs(){
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let numberValue = number.value;
    let subjectValue = subject.value.trim();
    let messageValue = yourMessage.value.trim();

    if(nameValue == ""){
        setError(name,'Name is required');
    } else {
        setSuccess(name);
    }

    if(emailValue== ""){
        setError(email, 'Email is required');
    } else if (!validateEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(numberValue == ""){
        setError(number, 'Number is required');
    } else {
        setSuccess(number);
    }

    if(subjectValue == ""){
        setError(subject, 'Subject is required');
    } else {
        setSuccess(subject);
    }

    if(messageValue == ""){
        setError(yourMessage, 'Message is required');
    } else {
        setSuccess(yourMessage);
    }
}