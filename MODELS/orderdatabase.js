const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const orderTable=sequelize.define('orderTable',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity:Sequelize.INTEGER


})

module.exports=orderTable