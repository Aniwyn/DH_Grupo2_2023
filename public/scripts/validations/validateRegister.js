let registerForm = document.querySelector('#register__form')


registerForm.addEventListener('submit', function (event) {
    let errors = 0
    event.preventDefault()

    errors += validateName()
    errors += validateUserName()
    errors += validatePassword()
    errors += validatePasswordRepeat()

    if (errors > 0) {
        event.preventDefault()
    }
})

function validateName() {
    let name = document.querySelector('#nombre')
    let expReg = /^[A-Za-z]+$/

    if (name.value.length < 3 || name.value.length > 20) {
        name.style.color = 'red';
        let input = document.querySelector('#container__inputName')
        input.innerHTML = '<span class=errorMessage>Debe contener entre 3 y 20 caracteres.</span>'
        return 1
    }

    if (!(expReg.test(name.value))) {
        name.style.color = 'red';
        let input = document.querySelector('#container__inputName')
        input.innerHTML = '<span class=errorMessage>Debe contener solo caracteres.</span>'
        return 1
    }

    return 0
}

function validateUserName() {
    let userName = document.querySelector('#apodo')
    let expReg = /^[A-Za-z]+$/

    if (userName.value.length < 3 || userName.value.length > 20) {
        userName.style.color = 'red';
        let input = document.querySelector('#container__inputUserName')
        input.innerHTML = '<span class=errorMessage>Debe contener entre 3 y 20 caracteres.</span>'
        return 1
    }

    if (!expReg.test(userName.value)) {
        userName.style.color = 'red';
        let input = document.querySelector('#container__inputUserName')
        input.innerHTML = '<span class=errorMessage>Debe contener solo caracteres.</span>'
        return 1
    }

    return 0
}

function validatePassword() {
    let password = document.querySelector('#contrasena')
    let expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w+$/;

    if (password.value.length < 6 || password.value.length > 50) {
        password.style.color = 'red';
        let input = document.querySelector('#container__inputPassword')
        input.innerHTML = '<span class=errorMessage>Debe tener al menos 6 caracteres.</span>'
        return 1
    }

    if (!expReg.test(password.value)) {
        password.style.color = 'red';
        let input = document.querySelector('#container__inputPassword')
        input.innerHTML = '<span class=errorMessage>Debe tener una letra minúscula, una letra mayúscula y un número.</span>'
        return 1
    }

    return 0
}

function validatePasswordRepeat() {
    let password = document.querySelector('#contrasena')
    let passwordRepeat = document.querySelector('#repetir-contrasena')

    if (passwordRepeat.value !== password.value) {
        passwordRepeat.style.color = 'red';
        let input = document.querySelector('#container__inputPasswordRepeat')
        input.innerHTML = '<span class=errorMessage>Las contraseñas no coinciden.</span>'
        return 1
    }

    return 0
}