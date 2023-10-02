//1. Guardar un usuario en al DB
//2. Buscar a un usuario que se quiera loguear por su email
//3. Buscar a un usuario por su ID 
//4. Editar la Info de un Usuario
//5. Eliminar a un usuario de la DB

const fs = require('fs')
const path = require('path')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).users
const jsonPath = path.join(__dirname, '../Data/users.json')

const userMethod = {
    getData: function () {
        return require(path.join(__dirname, "../../src/Data/BD")).users
    },
    searchId: function (id){
        let userFound = BD_provisoria.find(oneUser => oneUser.id === id)
        return userFound
    },
    searchField: function (field,text){
        let userFound = BD_provisoria.find(oneUser => oneUser[field] === text)
        return userFound
    },
    generateId: function () {
        let lastUser = BD_provisoria.pop()
        if(lastUser){
            return lastUser.id + 1
        }
        return 0
    },
    create: function (userData) {
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        BD_provisoria.push(newUser) 

        fs.writeFileSync(jsonPath, JSON.stringify(BD_provisoria, null, 2), "utf8", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Se sobreescribio correctamente el Usuario");
        })
        return newUser
    },
    delete: function (id) {
        BD_provisoria = BD_provisoria.filter(user => user.id !== id)
        fs.writeFileSync(jsonPath, JSON.stringify(BD_provisoria, null, 2), "utf8", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Se sobreescribio correctamente el Usuario");
        })
        return true
    },
    edit: function (userData) {

    }
}

module.exports = userMethod