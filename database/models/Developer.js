function developer(sequelize, DataTypes) {
    const Developer = sequelize.define(
        'Developer',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        },
        {
            tableName: 'developer',
			timestamps: false
        }
    )

    Developer.associate = (models) => {
        Developer.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_developer'
        })
    }

    return Developer
}

module.exports = developer