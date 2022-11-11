 const Sequelize=require('sequelize')

// const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})
const database=require('./database.js')

const user=database.define('user',{
    id:
    {type:Sequelize.INTEGER,
    autoIncrement:true,
    alloNull:false,
primaryKey:true},
email:Sequelize.STRING,
name:Sequelize.STRING})
// synchronizing()
// async function synchronizing()
// {
//     await user.sync()
//     //user_table.create({email:'singhindresh400@gmail.com',name:'indresh singh'})
// }

module.exports=user