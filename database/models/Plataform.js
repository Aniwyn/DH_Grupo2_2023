function platform(sequelize, DataTypes) {
    const Platform = sequelize.define(
        'Platform',
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
            tablename: 'plataform',
			timestamps: false
        }
    )

    return Platform
}

module.exports = platform