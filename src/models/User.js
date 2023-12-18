const fs = require('fs')
const path = require('path')
let db = require('../../database/models')
const { exit } = require('process')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).users
const jsonPath = path.join(__dirname, '../Data/users.json')

const userMethod = {
    searchField: async function (column, value) {

        if(column && value) {
            let user = await db.User.findOne({
                where: {[column]: value}
            })

            if(user) { 
                let userLogged = user.dataValue
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
    // delete: function (id) {
    //     BD_provisoria = BD_provisoria.filter(user => user.id !== id)
    //     fs.writeFileSync(jsonPath, JSON.stringify(BD_provisoria, null, 2), "utf8", (err) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log("Se sobreescribio correctamente el Usuario");
    //     })
    //     return true
    // },
    edit: function (userData) {
        console.log(userData);
        db.User.update({
            user_name: userData.user_name,
            email: userData.email,
            avatar: userData.avatar,
        },
        {
            where: {id: userData.id}
        })
        
        return true
    }
}

module.exports = userMethod