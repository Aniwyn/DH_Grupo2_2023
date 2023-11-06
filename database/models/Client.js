function client(sequelize, DataTypes) {
    const Client = sequelize.define(
        'Client',
        {
            id: {
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING(50)
            },
            user_name: {
                type: DataTypes.STRING(20)
            },
            email: {
                type: DataTypes.STRING(80)
            },
            password_hash: {
                type: DataTypes.STRING(100)
            },
            avatar: {
                type: DataTypes.STRING(50)
            },
            id_category: {
                type: DataTypes.INTEGER
            }
        },
        {
            tablename: 'client',
			timestamps: false
        }
    )
    return Client

    Client.associate = (models) => {
        Client.belongsTo(models.Client_category, {
            as: 'client_category',
            foreign_key: 'id_category'
        })

        Client.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'cart',
            foreign_key: 'id_client',
            otherKey: 'id_product',
            timestamps: false
        })
    }
}

module.exports = client