const UserMethod = require('../src/models/User')

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let userNameInCookie = req.cookies.user_name;

    let userFromCookie = await UserMethod.searchField('user_name', userNameInCookie)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = await UserMethod.searchField('user_name', req.session.userLogged.user_name)
    }

    next()
}
 
module.exports = userLoggedMiddleware