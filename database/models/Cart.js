function cart(sequelize, DataTypes) {
    const Cart = sequelize.define(
        'Cart',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'cart',
			timestamps: false
        }
    )
    
    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'id_user'
        })

        Cart.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'id_product'
        })
    }

    return Cart
}

module.exports = cart