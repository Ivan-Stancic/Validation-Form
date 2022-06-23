const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isvalid = false;
let passwordsMatch = false;

function validateForm() {
    isvalid = form.checkValidity();
    if (!isvalid) {
        message.textContent = 'Molim popunite sva polja.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch=false;
        message.textContent = 'Provjerite dali su  lozinke jednake.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    if (isvalid && passwordsMatch) {
        message.textContent = 'Registracija uspješna!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFromData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    console.log(user)
}

function processFormData(e) {
    e.preventDefault();
    //Validacija forme
    validateForm();
    if (isvalid && passwordsMatch) {
        storeFromData();
    }
}


form.addEventListener('submit', processFormData);