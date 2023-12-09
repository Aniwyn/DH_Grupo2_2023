const UserMethod = require('../src/models/User')

async function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = false

    let userNameInCookie = req.cookies.user_name;
    let userFromCookie = await UserMethod.searchField(userNameInCookie)

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