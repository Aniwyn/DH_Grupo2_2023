function rating_esrb(sequelize, DataTypes) {
    const Rating_ESRB = sequelize.define(
        'Rating_ESRB',
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
            tablename: 'rating_esrb',
			timestamps: false
        }
    )

    return Rating_ESRB
}

module.exports = rating_esrb