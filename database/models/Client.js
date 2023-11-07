function client(sequelize, DataTypes) {
    const Client = sequelize.define(
        'Client',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            user_name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(80),
                allowNull: false
            },
            password_hash: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            id_category: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tablename: 'client',
			timestamps: false
        }
    )

    Client.associate = (models) => {
        Client.hasMany(models.Category, {
            as: 'client_category',
            foreignKey: 'id_category'
        })

        Client.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'cart',
            foreignKey: 'id_client',
            otherKey: 'id_product',
            timestamps: false
        })
    }

    return Client
}

module.exports = client