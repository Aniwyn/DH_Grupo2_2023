const DB =require('../../../database/models');
const Op = DB.Sequelize.Op;

module.exports ={
    list: (req, res) => {
        DB.Product
            .findAll()
            .then(products => {
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                })
            })
    },

    show: (req, res) => {
        DB.Product
            .findByPk(req.params.id)
            .then(product => {
                return res.status(300).json({
                    data: product,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 300
                })
            })
    }

}