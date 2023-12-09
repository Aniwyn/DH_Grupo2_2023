function user(sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
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
                defaultValue: 'monster0.png',
                allowNull: false
            },
            id_category: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'user',
			timestamps: false
        }
    )

    User.associate = (models) => {
        User.belongsTo(models.Category, {
            as: 'client_category',
            foreignKey: 'id_category'
        })

        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'id_client'
        })
    }

    return User
}

module.exports = user