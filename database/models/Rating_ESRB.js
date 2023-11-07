function rating_esrb(sequelize, DataTypes) {
    const Rating_ESRB = sequelize.define(
        'Rating_ESRB',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            image: {
                type: DataTypes.STRING(40),
                allowNull: false
            }
        },
        {
            tablename: 'rating_esrb',
			timestamps: false
        }
    )

    Rating_ESRB.associate = (models) => {
        Rating_ESRB.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'id_rating_esrb'
        })
    }

    return Rating_ESRB
}

module.exports = rating_esrb