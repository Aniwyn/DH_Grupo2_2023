let productForm = document.querySelector("#product__form")

productForm.addEventListener("submit", function(event) {
    let errors = 0
    event.preventDefault()

    errors += validateGameName()
    errors += validateGameSubName()
    errors += validateFormat()
    errors += validatePlataform()
    errors += validateReleaseDate()
    errors += validateDeveloper()
    errors += validateGenre()
    errors += validateClasificacionPEGI()
    errors += validateClasificacionESRB()
    errors += validatePrecio()
    //validate imagen caratula
    //validate imagen gameplay
    errors += validateTriller()

    if (errors > 0) event.preventDefault() 
})

function validateGameName() {   
    let gameName = document.querySelector("#gameName")
    
    if (gameName.value.length < 3 || gameName.value.length > 50) {
        gameName.style.color = "red"
        let inputGameName = document.querySelector("#container__inputGameName")
        inputGameName.innerHTML = "<span class=errorMessage>Debe contener entre 3 y 50 caracteres.</span>"
        return 1
    }

    return 0
}

function validateGameSubName() {
    let gameSubName = document.querySelector("#f_subTitle")
    
    if (gameSubName.value.length < 3 || gameSubName.value.length > 30) {
        gameSubName.style.color = "red"
        let inputGameSubName = document.querySelector("#container__inputGameSubName")
        inputGameSubName.innerHTML = "<span class=errorMessage>Debe contener entre 3 y 30 caracteres.</span>"
        return 1
    }

    return 0
}


function validateFormat() {   
    let format = document.getElementsByName("format");
    let flag = false;

    for(let i=0; i < format.length; i++){
        if(format[i].checked){
            flag = true
            break;
        }
    }

    
    if (!flag) {
        
        let inputFormat = document.querySelector("#container__inputFormat")
        inputFormat.innerHTML = "<span class=errorMessage>Debe seleccion al menos una opcion.</span>"
        return 1
    }

    return 0
}

function validatePlataform() {   
    let plataform = document.getElementsByName("platform");
    let flag = false;

    for(let i=0; i < plataform.length; i++){
        if(plataform[i].checked){
            flag = true
            break;
        }
    }

    
    if (!flag) {
        
        let inputPlataform = document.querySelector("#container__inputPlataform")
        inputPlataform.innerHTML = "<span class=errorMessage>Debe seleccion al menos una opcion.</span>"
        return 1
    }

    return 0
}

function validateReleaseDate() {
    let releaseDate = document.querySelector('#f_date')

    if (!releaseDate.value instanceof Date) {
        let inputReleaseDate = document.querySelector("#container__inputReleaseDate")
        inputReleaseDate.innerHTML = "<span class=errorMessage>Debe ingresar una fecha.</span>"
        return 1
      }

    return 0
}

function validateDeveloper() {
    let developer = document.querySelector('#f_developer')

    if(developer.value.length < 3 || developer.value.length > 40) {
        developer.style.color = 'red'
        let inputDeveloper = document.querySelector('#input__devContainer')
        inputDeveloper.innerHTML = "<span class=errorMessage>Debe contener entre 3 y 40 caracteres.</span>"
        return 1
    }
    
    return 0
}

function validateGenre() {
    let genre = document.getElementsByName('#f_chkbox-action');
    let flag = false;

    for(let i=0; i < genre.length; i++){
        if(genre[i].checked){
            flag = true
            break;
        }
    }

    if(!flag){

        let inputGenre = document.querySelector('#input__genreContainer')
        inputGenre.innerHTML = "<span class=errorMessage>Debe seleccionar al menos una opcion.</span>"
        return 1
    }

    return 0 
}

function validateClasificacionPEGI() {
    let clasificacionPEGI = document.getElementsByName('ranking1');
    let flag = false;

    for(let i=0; i < clasificacionPEGI.length; i++){
        if(clasificacionPEGI[i].checked){
            flag = true
            break;
        }
    }

    if(!flag){

        let inputClasificacionPEGI = document.querySelector('#input__clasificacionContainer')
        inputClasificacionPEGI.innerHTML = "<span class=errorMessage>Debe seleccionar al menos una opcion.</span>"
        return 1
    }

    return 0 
}

function validateClasificacionESRB() {
    let clasificacionESRB = document.getElementsByName('ranking2');
    let flag = false;

    for(let i=0; i < clasificacionESRB.length; i++){
        if(clasificacionESRB[i].checked){
            flag = true
            break;
        }
    }

    if(!flag){

        let inputClasificacionESRB = document.querySelector('#input__clasificacionContainer')
        inputClasificacionESRB.innerHTML = "<span class=errorMessage>Debe seleccionar al menos una opcion.</span>"
        return 1
    }

    return 0 
}

function validatePrecio() {
    let precio = document.querySelector('#f_price')

    if (typeof precio.value !== 'number') {
        let inputPrecio = document.querySelector('#input__priceContainer')
        inputPrecio.innerHTML = "<span class=errorMessage>Debe ingresar un valor numerico.</span>"
        return 1
      } 

    return 0
}

//validate imagen caratura

//validate imagen gameplay

function validateTriller() {
    let triller = document.querySelector('#f_triller')

    if (!triller.value.isUrl()) {
        let inputTriller = document.querySelector('#input__triller')
        inputTriller.innerHTML = "<span class=errorMessage>URL invalida.</span>"
        return 1
      } 

    if(triller.value.length < 3 || triller.value.length > 50){
        let inputTriller = document.querySelector('#input__triller')
        inputTriller.innerHTML = "<span class=errorMessage>Debe tener entre 3 y 50 caracteres.</span>"
        return 1
    }
    
    return 0
}