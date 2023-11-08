/* VARIABLE DECLARATION */
const path = require("path")
const bcryptjs = require('bcryptjs')
let BD_provisoria = require(path.join(__dirname, "../Data/BD")).product
let db = require('../../database/models')
let UserMethod = require(path.join(__dirname, "../models/User"))
const { validationResult } = require('express-validator')


/* GETS SET */
const userController = {
    home: (req, res) => {
        // db.Products.findAll()
        //     .then(products => {
                
        //     })
        res.render(path.join(__dirname, "../views/users/home.ejs"), { BD: BD_provisoria });
    },
    register: (req, res) => {
        res.render(path.join(__dirname, "../views/users/register.ejs"));
    },
    processRegister: function (req, res) {
        let errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.render(path.join(__dirname, "../views/users/register.ejs"), { errors: errors.array(), old: req.body });
        } else {
            let userInDB = UserMethod.searchField('email', req.body.email)
            if (userInDB) {
                return res.render(path.join(__dirname, "../views/users/register.ejs"), {
                    errors: [{
                        msg: 'Este email ya esta registrado',
                        path: 'email'
                    }],
                    old: req.body
                })
            }

            userInDB = UserMethod.searchField('userName', req.body.userName)
            if (userInDB) {
                return res.render(path.join(__dirname, "../views/users/register.ejs"), {
                    errors: [{
                        msg: 'Este usuario ya esta registrado',
                        path: 'userName'
                    }],
                    old: req.body
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
            res.render(path.join(__dirname, "../views/users/login.ejs"), { errors: errors.array(), old: req.body });
        } else {
            if (userToLogin) {
                if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                    let userLogged = structuredClone(userToLogin)
                    delete userLogged.password
                    // Guardarlo en session
                    req.session.userLogged = userLogged

                    if (req.body.remember) {
                        res.cookie('userName', req.body.userName, { maxAge: (1000 * 60) * 2 })
                    }
                    return res.redirect("/")
                }
                return res.render(path.join(__dirname, "../views/users/login.ejs"), {
                    errors: [{
                        msg: "Las credenciales son invalidas.",
                        path: 'password'
                    }],
                    old: req.body
                })
            }

            return res.render(path.join(__dirname, "../views/users/login.ejs"), {
                errors: [{
                    msg: "No se encuentra este nombre de usuario registrado.",
                    path: 'userName'
                }],
                old: req.body
            })
        }
    },
    logout: (req, res) => {
        res.clearCookie('userName')
        req.session.destroy()
        return res.redirect('/')
    },
    profile: (req, res) => {
        res.render(path.join(__dirname, "../views/users/profile.ejs"), { isEdit: false })
    },
    edit_profile: (req, res) => {
        res.render(path.join(__dirname, "../views/users/profile.ejs"), { isEdit: true })
    },
    put: (req, res) => {
        let avatar_image = req.file
        let userData = req.body
        let userInBD = UserMethod.searchId(userData.id)
        // return res.send(userInBD)
        let editedUser = {}
        if (userData) {
            editedUser = {
                ...userInBD,
                userName: userData.userName,
                email: userData.email,
                avatar: avatar_image ? avatar_image.filename : userInBD.avatar
            }
        }

        let editReady = UserMethod.edit(editedUser)
        
        req.session.destroy()
        let userToSession = structuredClone(editedUser)
        delete userToSession.password
        req.session.userLogged = userToSession
        res.clearCookie('userName')

        res.redirect('/profile')
    }
}

/* EXPORTS */
module.exports = userController;