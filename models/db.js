const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodedb','root','123456',{
  host:'mysqldb',
  dialect:'mysql'
})

// sequelize.authenticate().then(function(){
//   console.log('conectado com sucesso')
// }).catch(function(erro){
//   console.log('falha ao conectar-se'+ erro)
// })

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}