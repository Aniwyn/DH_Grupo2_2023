const UserMethod = require('../src/models/User')

function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = false

    let userNameInCookie = req.cookies.userName;
    let userFromCookie = UserMethod.searchField('userName', userNameInCookie)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}
 
module.exports = userLoggedMiddleware