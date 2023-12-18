function product(sequelize, DataTypes) {
    const Product = sequelize.define(
        'Product',
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
            },
            second_name: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            description_1: {
                type: DataTypes.TEXT,
                allowNull: false
            }
            ,
            description_2: {
                type: DataTypes.TEXT,
                allowNull: false
            }
            ,
            description_3: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            description_4: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            cover_image: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            release_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            trailer: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            gameplay_image: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            id_rating_esrb: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_rating_pegi: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_developer: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_format: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'product',
			timestamps: false
        }
    )

    Product.associate = (models) => {
        Product.belongsTo(models.Rating_ESRB, {
            as: 'rating_esrb',
            foreignKey: 'id_rating_esrb'
        })

        Product.belongsTo(models.Rating_PEGI, {
            as: 'rating_pegi',
            foreignKey: 'id_rating_pegi'
        })

        Product.belongsTo(models.Developer, {
            as: 'developer',
            foreignKey: 'id_developer'
        })
    
        Product.belongsTo(models.Format, {
            as: 'format',
            foreignKey: 'id_format'
        })

        Product.belongsToMany(models.User, {
            as: 'users',
            through: 'cart',
            foreignKey: 'id_product',
            otherKey: 'id_user',
            timestamps: false
        })

        Product.belongsToMany(models.Genre, {
            as: 'genres',
            through: 'product_genre',
            foreignKey: 'id_product',
            otherKey: 'id_genre',
            timestamps: false
        })

        Product.belongsToMany(models.Platform, {
            as: 'platforms',
            through: 'product_platform',
            foreignKey: 'id_product',
            otherKey: 'id_platform',
            timestamps: false
        })

        Product.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'id_product'
        })
    }

    return Product
}

module.exports = product