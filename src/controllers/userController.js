/* VARIABLE DECLARATION */
const path = require("path")
const bcryptjs = require('bcryptjs')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product
let UserMethod = require(path.join(__dirname, "../../src/models/User"))

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
        //VALIDACIONES

        
        let userInDB = UserMethod.searchField('email', req.body.email)
        
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
    },
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/users/login.ejs"));
    },
    processLogin: (req, res) => {
        let userToLogin = UserMethod.searchField('userName', req.body.userName)

        if(userToLogin) {
            if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                delete userToLogin.password
                //guardarlo en session
                req.session.userLogged = userToLogin
                res.redirect("/")
                //REDIRIGIRLO
            }
            return res.render(path.join(__dirname, "../views/users/login.ejs"), {
                errrors: {
                    password: {
                        msg: "Las credenciales son invalidas"
                    }
                }
            })
        }

        return res.render(path.join(__dirname, "../views/users/login.ejs"), {
            errrors: {
                email: {
                    msg: "No se encuentra este email registrado"
                }
            }
        })
    },

    logout: (req,res) => {
        req.session.destroy()
        return res.redirect('/')
    }

}

/* EXPORTS */
module.exports = userController;