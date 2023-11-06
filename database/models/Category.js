function category(sequelize, DataTypes) {
    const Category = sequelize.define(
        'Category',
        {
            id: {
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING(40)
            }
        },
        {
            tablename: 'category',
			timestamps: false
        }
    )
    

    Category.associate = (models) => {
        Category.belongsTo(models.Client_category, {
            as: 'client_category',
            foreign_key: 'id_category'
        })
    }

    return Category
}

module.exports = category