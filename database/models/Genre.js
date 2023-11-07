function genre(sequelize, DataTypes) {
    const Genre = sequelize.define(
        'Genre',
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
            tablename: 'genre',
			timestamps: false
        }
    )

    Genre.associate = (models) => {
        Genre.belongsToMany(models.Product, {
            as: 'genre_product',
            through: 'product_genre',
            foreignKey: 'id_genre',
            otherKey: 'id_product',
            timestamps: false
        })
    }
 
    return Genre
}

module.exports = genre