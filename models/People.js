const db = require ('./db')

const People = db.sequelize.define('peoples',{
    nome:{
        type:db.Sequelize.STRING,
    }
})

People.sync({ force:true})
module.exports = People