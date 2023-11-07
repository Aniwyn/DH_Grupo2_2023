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
            tablename: 'developer',
			timestamps: false
        }
    )

    Developer.associate = (models) => {
        Developer.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'id_developer'
        })
    }

    return Developer
}

module.exports = developer