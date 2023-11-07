function cart(sequelize, DataTypes) {
    const Cart = sequelize.define(
        'Cart',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            id_product: {
                type: DataTypes.INTEGER
            },
            id_client: {
                type: DataTypes.INTEGER
            }
        },
        {
            tablename: 'cart',
			timestamps: false
        }
    )
    

    Cart.associate = (models) => {
        
    }

    return Cart
}

module.exports = cart