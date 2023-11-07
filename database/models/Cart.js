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
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_client: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tablename: 'cart',
			timestamps: false
        }
    )
    

    Cart.associate = (models) => {
        Cart.belongsTo(models.Client, {
            as: 'client',
            foreignKey: 'id_client'
        })

        // Cart.hasMany(models.Product, {
        //     as: 'products',
        //     foreignKey: 'id_product'
        // })

        Cart.belongsToMany(models.Product, {
            as: 'cart_product',
            through: 'product_cart',
            foreignKey: 'id_cart',
            otherKey: 'id_product',
            timestamps: false
        })
    }

    return Cart
}

module.exports = cart