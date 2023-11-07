function rating_pegi(sequelize, DataTypes) {
    const Rating_PEGI = sequelize.define(
        'Rating_PEGI',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(40)
            },
            image: {
                type: DataTypes.STRING(40)
            }
        },
        {
            tablename: 'rating_pegi',
			timestamps: false
        }
    )

    return Rating_PEGI
}

module.exports = rating_pegi