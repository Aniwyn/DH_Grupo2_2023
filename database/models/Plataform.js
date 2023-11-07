function platform(sequelize, DataTypes) {
    const Platform = sequelize.define(
        'Platform',
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
            tablename: 'plataform',
			timestamps: false
        }
    )

    Platform.associate = (models) => {
        Platform.belongsToMany(models.Product, {
            as: 'platform_product',
            through: 'product_platform',
            foreignKey: 'id_platform',
            otherKey: 'id_product',
            timestamps: false
        })
    }

    return Platform
}

module.exports = platform