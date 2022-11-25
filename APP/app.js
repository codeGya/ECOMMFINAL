const dotenv=require('dotenv')
dotenv.config()
//console.log(process.env,'hey buudy how are you')


let express=require('express')
let app=express()
let router=require('../ROUTER/router.js')

let cors=require('cors')
app.use(express.json())
app.use(cors())



const Cart=require('../MODELS/cartmodel.js')
const user=require('../MODELS/customermodel.js')
const cartItems=require('../MODELS/cartitemsmodel.js')
const Product=require('../MODELS/productmodel.js')
//association()
const Sequelize=require('../MODELS/database.js')
//const cart = require('./cartmodel.js')

//const Order=require('./orderdatabase.js')
const Order=require('../MODELS/ordertable.js')
const orderData=require('../MODELS/orderdatabase.js')
const path = require('path')


//synch

//synchronizing()

// async function synchronizing()
// {
//     await cart.sync()
//     await user.sync()
//     await cartItems.sync()
//     await product.sync()
// }
//app.sync({force:true})





    
user.hasMany(Product)
Product.belongsTo(user)

user.hasOne(Cart)
Cart.belongsTo(user)

Cart.belongsToMany(Product,{through:cartItems})
Product.belongsToMany(Cart,{through:cartItems})

Product.belongsToMany(Order,{through:orderData})
Order.belongsToMany(Product,{through:orderData})

user.hasMany(Order)
Order.belongsTo(user)

// Order.hasMany(Product)
// Product.belongsTo(Order)
// Order.belongsToMany(Product,{through:orderData})
// Product.belongsToMany(Order,{through:orderData})


//synchronizing()
// async function synchronizing()
// {
//     await cart.sync()
//     await user.sync()
//     await cartItems.sync()
//     await product.sync()
// }

try{

    synchronizing()
    async function synchronizing()
    {
        await Sequelize.sync()
      
        

         //let saveDataInCart=await user.create({email:'singhindresh400@gmail.com',name:'indresh singh'})

     //await saveDataInCart.createCart()
        

    }


}
catch (error){
    console.log(error)
}









//const sequelize = require('./database.js')

// app.use(router)
// app.use(router)
// app.use(router)

app.use(async (req,res,next)=>{
    let getDataOfUser=await user.findByPk(1)
        if(getDataOfUser===null)
        {
           const dataOfUser= await user.create({email:'singhindresh400@gmail.com',name:'indresh singh'})
            req.user=dataOfUser
            
    
        }
        else{
            req.user=getDataOfUser
        }
        console.log(req.user,'i am hard coded user')
    
    //console.log(req.user)\
    //console.log(req.user)
     //await req.user.createCart()
     
    next()
})


app.use(router)
app.use((req,res,next)=>{
    //console.log(`FRONTEND/${req.url}`,'req.url...................')
    res.sendFile(path.join(__dirname,'..',`FRONTEND`,`${req.url}`))
})
// //database.sync({sequelize.sync().then(result=>{
//     // console.log(result);
//      app.listen(1111,()=>{
//         console.log(' listening at 1111 port ');
//     });
    
// }).catch(err=>{
//     console.log(err);
// })force:true})

app.listen(3500)

