let db = require('../../database/models')

const userMethod = {
    searchField: async function (column, value) {

        if(column && value) {
            let user = await db.User.findOne({
                include: [{ model: db.Cart, as: 'carts'}],
                where: {[column]: value}
            })

            if(user) { 
                let userLogged = user.dataValues
                delete userLogged.password_hash
                return userLogged
            }
            return null
        }
    },
    generateAvatar: function() {
        let monsterDir = ['monster0.png','monster1.png','monster2.png','monster3.png']

        return monsterDir[Math.floor(Math.random() * monsterDir.length)]
    },
    create: function(userData) {
        console.log('USER DATA: ',userData);
        db.User.create({
            name: userData.name,
            user_name: userData.user_name,
            email: userData.email,
            password_hash: userData.password_hash,
            avatar: userMethod.generateAvatar(),
            id_category: userData.id_category
        })
    },
    edit: async function (userData) {
        console.log('ASDASDASDASDASD', userData);
        return db.User.update({
            user_name: userData.user_name,
            email: userData.email,
            avatar: userData.avatar,
        },
        {
            where: {id: userData.id}
        })
        
    }
}

module.exports = userMethod