/* VARIABLE DECLARATION */
const path = require("path")
const bcryptjs = require('bcryptjs')
let BD_provisoria = require(path.join(__dirname, "../Data/BD")).product
let UserMethod = require(path.join(__dirname, "../models/User"))
const { validationResult } = require('express-validator')


/* GETS SET */
const userController = {
    home: (req, res) => {
        console.log("Enmtre en e lget");
        res.render(path.join(__dirname, "../views/users/home.ejs"), { BD: BD_provisoria });
    },
    register: (req, res) => {
        res.render(path.join(__dirname, "../views/users/register.ejs"));
    },
    processRegister: function (req, res) {
        let userInDB = UserMethod.searchField('email', req.body.email)
        let errors = validationResult(req)

        if (errors) {
            res.render(path.join(__dirname, "../views/users/register.ejs"), { errors: errors.mapped(), old: req.body });
        } else {
            if (userInDB) {
                return res.render('/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya esta registrado'
                        }
                    },
                    oldData: req.body
                })
            }

            delete req.body.password_repeat
            
            let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10)
            }

            let userCreated = UserMethod.create(userToCreate)

            res.redirect('/login')
        }
    },
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },
    processLogin: (req, res) => {
        let userToLogin = UserMethod.searchField('userName', req.body.userName)
        let errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(errors.array())
            res.render(path.join(__dirname, "../views/users/login.ejs"), { errors: errors.array(), old: req.body });
        } else {
            if(userToLogin) {
                console.log('usertologin')
                if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                    delete userToLogin.password
                    req.session.userLogged = userToLogin
                    res.redirect("/")
                }
                return res.render(path.join(__dirname, "../views/users/login.ejs"), {
                    errors: [{
                        msg: "Las credenciales son invalidas.",
                        path: 'password'
                    }],
                    old: req.body
                })
            }
    
            console.log('error password')
            console.log()
            return res.render(path.join(__dirname, "../views/users/login.ejs"), {
                errors: [{
                    msg: "No se encuentra este nombre de usuario registrado.",
                    path: 'userName'
                }],
                old: req.body
            })
        }
    },
    logout: (req,res) => {
        req.session.destroy()
        return res.redirect('/')
    }

}

/* EXPORTS */
module.exports = userController;