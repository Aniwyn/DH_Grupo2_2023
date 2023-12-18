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

    return Cart
}

module.exports = cart