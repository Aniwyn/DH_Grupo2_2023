function format(sequelize, DataTypes) {
    const Format = sequelize.define(
        'Developer',
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
            tablename: 'format',
			timestamps: false
        }
    )

    return Format
}

module.exports = format