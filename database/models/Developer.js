function developer(sequelize, DataTypes) {
    const Developer = sequelize.define(
        'Developer',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(50)
            }
        },
        {
            tablename: 'developer',
			timestamps: false
        }
    )

    return Developer
}

module.exports = developer