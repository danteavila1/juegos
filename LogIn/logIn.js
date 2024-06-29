let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');


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
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if(emailValue== ""){
        setError(email, 'Email is required');
    } else if (!validateEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue == ""){
        setError(password, 'Password is required');
    } else {
        setSuccess(password);
    }

}