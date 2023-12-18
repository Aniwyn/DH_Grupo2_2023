function adminMiddleware (req,res,next) {
    if(req.session.userLogged.id_category != 2) {
        return res.redirect('/')
    }
    next()
}

module.exports = adminMiddleware