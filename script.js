const email = document.querySelector('#email')
const form = document.querySelector('#form')

//Error
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
    const button = document.querySelector('#submit')
    button.className = 'submit error'
}
//succes
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes'
    const button = document.querySelector('#submit')
    button.className = 'submit succes'
}

//check Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces
    } else {
        showError(input, 'Email is not invalid')
    }
}
// check Required
function checkRequired (inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === ""){
            showError(input, `${getFieldName(input)}is required`);
        } else {
            showSucces(input)
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkRequired([email])
    checkEmail(email)
});