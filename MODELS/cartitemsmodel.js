//const database=require('./database.js')
//const Sequelize=require('sequelize')
const sequelize = require('./database.js')
const Sequelize=require('sequelize')
//const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

const cartItem=sequelize.define('cartItem',{
    id:
    {type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,primaryKey:true,
   },
    quantity:Sequelize.INTEGER
})
// synchronizing()

// async function synchronizing()
// {
//     await cartItem.sync()
// }

module.exports=cartItem