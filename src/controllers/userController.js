/* VARIABLE DECLARATION */
const path = require("path")

/* GETS SET */
const userController = {
    home : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/home.html"))
    },
    register : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/register.html"))
    },
    login : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/login.html"))
    }
}

/* EXPORTS */
module.exports = userController