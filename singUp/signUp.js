let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

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
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

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

    if(passwordValue == ""){
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character');
    } else {
        setSuccess(password);
    }

    if(password2Value == ""){
        setError(password2, 'Confirm your password');
    } else if (password2Value !== passwordValue){
        setError(password2, 'Passwords does not match');
    } else {
        setSuccess(password2);
    }
}






// function validar()
// {
//     limpiarDivOpcional();
//     validarObligatorios();
//     if(validarObligatorios()){
//         alert("formulario enviado con exito");
//     }
// }


// function validarObligatorios() {  
//     limpiarMensajes();
//     let exito = true;
//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let confirmPassword = document.getElementById('confirmPassword');
//     let errorContainer = document.getElementById('errorContainer');

//     if (name.value==""){
//         const message = document.createElement('div');
//         message.classList.add("message");
//         message.textContent = "Name can't be empty";
//         message.style.color = 'red';
//         errorContainer.appendChild(message);
//         name.style.border = '2px solid red';
//         exito = false;
//     }
//     if (email.value==""){
//         const message = document.createElement('div');
//         message.classList.add("message");
//         message.textContent = "Email can't be empty";
//         message.style.color = 'red';
//         errorContainer.appendChild(message);
//         email.style.border = '2px solid red';
//         exito = false;
//     } else {
//         if(!validarEmail(email.value)){
//             const message = document.createElement('div');
//             message.classList.add("message");
//             message.textContent = "Invalid email format";
//             message.style.color = 'red';
//             errorContainer.appendChild(message);
//             email.style.border = '2px solid red';
//             exito = false;
//         }
//     }

//     name.addEventListener('focus', eliminarBordeRojo);
//     email.addEventListener('focus', eliminarBordeRojo);
//     password.addEventListener('focus', eliminarBordeRojo);
//     return exito;
// }

// function validarEmail(email){
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }

// function eliminarBordeRojo(event) {
//     event.target.style.border = '';
// }

// function limpiarDivOpcional(){
//     let errorContainer = document.getElementById('errorContainer');
//     errorContainer.innerHTML = "";
// }
// function limpiarMensajes() {
//     let mensajes = document.querySelectorAll('.message');
//     mensajes.forEach(function (mensaje) {
//         mensaje.remove();
//     });
// }
