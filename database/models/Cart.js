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
        
    }

    return Cart
}

module.exports = cart