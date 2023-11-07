function genre(sequelize, DataTypes) {
    const Genre = sequelize.define(
        'Genre',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(40)
            }
        },
        {
            tablename: 'genre',
			timestamps: false
        }
    )

    return Genre
}

module.exports = genre