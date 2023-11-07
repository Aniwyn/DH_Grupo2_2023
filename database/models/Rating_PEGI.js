function rating_pegi(sequelize, DataTypes) {
    const Rating_PEGI = sequelize.define(
        'Rating_PEGI',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
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
            tablename: 'rating_pegi',
			timestamps: false
        }
    )

    Rating_PEGI.associate = (models) => {
        Rating_PEGI.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'id_rating_pegi'
        })
    }

    return Rating_PEGI
}

module.exports = rating_pegi