const db = require('../../../database/models');

module.exports = {
    list: (req, res) => {
        db.Product.findAll({
            include: [
                {association: 'platforms'}, 
                {association: 'genres'},
                {association: 'rating_pegi'},
                {association: 'rating_esrb'},
                {association: 'format'},
                {association: 'developer'}
            ]
        })
        .then(products => {
            return res.status(200).json({
                meta: {
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200,
                    total: products.length,
                },
                data: products
            })
        })
    },
    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                data: product,
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200
            })
        })
    },
    genres: (req, res) => {
        db.Genre.findAll()
        .then(genres => {
            return res.status(200).json({
                meta: {
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200,
                    total: genres.length,
                },
                data: genres
            })
        })
    }
}