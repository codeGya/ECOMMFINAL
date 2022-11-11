const Sequelize=require('sequelize')
// Product.belongsToMany(Order,{through:Order_table})
// Order.belongsToMany(Product,{through:Order_table})

const sequelize=require('./database')

const order=sequelize.define('order',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    //quantity:Sequelize.INTEGER
})

module.exports=order