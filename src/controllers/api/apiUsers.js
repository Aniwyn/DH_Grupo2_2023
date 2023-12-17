const { ExclusionConstraintError } = require('sequelize');
const DB =require('../../../database/models');
const Op = DB.Sequelize.Op;

module.exports ={
    list: (req, res) => {
        DB.User
            .findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users(Exclusion.password_hash),
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                
                })
            })
           /* .then(data => {
                const detailUrl = data.detail_url;
                console.log(`La URL de detalle es: ${detailUrl}`);
              })*/
    },

    show: (req, res) => {
        DB.User
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200
                })
            })
    }

}