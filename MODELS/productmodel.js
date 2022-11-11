const Sequelize=require('sequelize')
//const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

const sequelize=require('./database.js')

// const product=sequelize.define('product',{
//     id:
//     {type:Sequelize.INTEGER,
//     autoIncrement:true,
//     allowNull:false,
//     primaryKey:true},
//     imageurl:Sequelize.STRING,
//     price:Sequelize.STRING,
//     title:Sequelize.STRING
// })

//requestAnimationFrame.user
//requestAnimationFrame.user
const product=sequelize.define('product',{id:
    {type:Sequelize.INTEGER,
   autoIncrement:true,
    allowNull:false,
   primaryKey:true,
  },
    imageurl:Sequelize.STRING,
   price:Sequelize.STRING,
 title:Sequelize.STRING,
userId:Sequelize.INTEGER})






// async function synchronizing()
// {
//     await product.sync()
//    // await cart_database.sync()
//     // await new_model.create({imageurl:'https://media.istockphoto.com/photos/red-sneakers-shoes-picture-id1391533360',price:'12000'})
//     // await new_model.create({imageurl:'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',price:'80000'})
//     // await new_model.create({imageurl:'https://st.depositphotos.com/2209782/2833/i/450/depositphotos_28336025-stock-photo-clothes-on-a-rack.jpg',price:'15000'})
//     // await new_model.create({imageurl:'https://images.pexels.com/photos/1582482/pexels-photo-1582482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',price:'2000'})
// }
// synchronizing()
module.exports=product



//module.exports=cart_database

