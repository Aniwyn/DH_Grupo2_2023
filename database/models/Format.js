function format(sequelize, DataTypes) {
    const Format = sequelize.define(
        'Developer',
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
            tablename: 'format',
			timestamps: false
        }
    )

    Format.associate = (models) => {
        Format.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'id_format'
        })
    }

    return Format
}

module.exports = format