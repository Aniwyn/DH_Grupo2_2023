function category(sequelize, DataTypes) {
    const Category = sequelize.define(
        'Category',
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
            tableName: 'category',
			timestamps: false
        }
    )
    

    Category.associate = (models) => {
        Category.hasMany(models.User, {
            as: 'user_category',
            foreign_key: 'id_category'
        })
    }

    return Category
}

module.exports = category