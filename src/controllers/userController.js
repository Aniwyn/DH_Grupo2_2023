/* VARIABLE DECLARATION */
const path = require("path")

/* GETS SET */
const userController = {
    home : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/home.ejs"))
    },
    register : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/register.ejs"))
    },
    login : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/users/login.ejs"))
    }
}

/* EXPORTS */
module.exports = userController