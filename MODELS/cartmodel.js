const Sequelize=require('sequelize')
//const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})
const sequelize=require('./database.js')


const cart=sequelize.define('cart',{id:
    {type:Sequelize.INTEGER,
    
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
}},
    {tableName:'Cart'})
// synchronizing()
// async function synchronizing() 
// {
//     await cart.sync({force:true})
// } 
// const cart=database.define('cart',{
//     id:
//         {type:Sequelize.INTEGER,
        
//       allowNull:false,
//       primaryKey:true.valueOf,
//     autoIncrement:true}}
//       )


module.exports=cart






//module.exports=cart