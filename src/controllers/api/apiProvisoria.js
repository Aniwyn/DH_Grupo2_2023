const DB =require('../../../database/models');
const Op = DB.Sequelize.Op;

module.exports ={
    list: (req, res) => {
        DB.Product
            .findAll({
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
                    total: products.length,
                    data: products,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                })
            })
    },

   /* details: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(products => {
            return res.status(200).json({
                meta: {
                    status:res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                }
            })
        })
    },*/

    show: (req, res) => {
        DB.Product
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                })
            })

    }

}