/* VARIABLE DECLARATION */
const path = require("path")
const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD"));

/* GETS SET */
const userController = {
    home : (req,res) => {
        res.render(path.join(__dirname, "../views/users/home.ejs"), {BD: BD_provisoria});
    },
    register : (req,res) => {
        res.render(path.join(__dirname, "../views/users/register.ejs"));
    },
    login : (req,res) => {
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    }
    
}

/* EXPORTS */
module.exports = userController;