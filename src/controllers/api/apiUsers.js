const db = require('../../../database/models');

module.exports ={
    list: (req, res) => {
        db.User.findAll({
            attributes: { exclude: ['password_hash'] }
        })
        .then(users => {
            return res.status(200).json({
                meta: {
                    total: users.length,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                },
                data: users
            })
        })
    },
    show: (req, res) => {
        db.User.findByPk(req.params.id, {
            attributes: { exclude: ['password_hash'] }
        })
        .then(user => {
            return res.status(200).json({
                meta: {
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                },
                data: user
            })
        })
    }

}