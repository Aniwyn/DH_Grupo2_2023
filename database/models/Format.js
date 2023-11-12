function format(sequelize, DataTypes) {
    const Format = sequelize.define(
        'Format',
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
            }
        },
        {
            tableName: 'format',
			timestamps: false
        }
    )

    Format.associate = (models) => {
        Format.hasMany(models.Product, {
            as: 'productsasd',
            foreignKey: 'id_format'
        })
    }

    return Format
}

module.exports = format