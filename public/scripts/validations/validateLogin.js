let loginForm = document.querySelector("#login__form")

loginForm.addEventListener("submit", function(event) {
    let errors = 0

    errors += validateUserName()
    errors += validatePassword()
    
    if (errors > 0) event.preventDefault() 
})

function validateUserName() {   
    let userName = document.querySelector("#nombre")
    
    if (userName.value.length < 3 || userName.value.length > 20) {
        userName.style.color = "red"
        let inputUserName = document.querySelector("#container__inputUserName")
        inputUserName.innerHTML = "<span class=errorMessage>Debe contener entre 3 y 20 caracteres.</span>"
        return 1
    }

    return 0
}

function validatePassword() {   
    let password = document.querySelector("#contrasena")
    
    if (password.value.length < 6 || password.value.length > 50) {
        password.style.color = "red"
        let inputPassword = document.querySelector("#container__inputPassword")
        inputPassword.innerHTML = "<span class=errorMessage>Debe contener entre 6 y 50 caracteres.</span>"
        return 1
    }

    return 0
}
