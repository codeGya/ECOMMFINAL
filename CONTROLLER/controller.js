let Product=require('../MODELS/productmodel.js')
let Cart=require('../MODELS/cartmodel.js')
let user=require('../MODELS/customermodel.js')
const cartItems=require('../MODELS/cartitemsmodel.js')
const Order=require('../MODELS/ordertable.js')
const orderData=require('../MODELS/orderdatabase')

exports.getUserDetails=async (req,res,next)=>{
    // const page=1;
    // const dataPerPage=1
    const page=req.query.page
    const items_per_page=1
    //console.log('i reached here')




    const waitForGettingData=await Product.count()
    
   // const lengthOfData=waitForGettingData.length
    const waitForSendingData=await Product.findAll({offset:(page-1)*items_per_page,limit:1})
    // const usefulInformation={

    //}
    res.json({
        products:waitForSendingData,
        key:{
        currentPage:+page,
        nextPage:+page+1,
        hasNextPage:items_per_page*page<waitForGettingData,
        hasPreviousPage:page>1,
        previousPage:page-1,
        lastPage:Math.ceil(waitForGettingData/items_per_page)},
})
    

   // console.log(waitForSendingData,'i want to check my array length')
    //res.send(waitForGettingData)

}

exports.addDataToBackend=async (req,res,next)=>{
    let imageurl=req.body.imageurl
    let price=req.body.price
    let title=req.body.title

    const user=req.user

    // let waitForSavingDataToTable=await model.create({imageurl:imageurl,price:price,title:title})
    // //console.log(waitForSavingDataToTable)
    const waitForSavingDataToTable=await user.createProduct({imageurl:imageurl,price:price,title:title})
    res.send(waitForSavingDataToTable)
}
exports.getOneParticularUserData=async (req,res,next)=>{

    let primaryKey=req.params.getId
    let getDataFromDataBase=await Product.findByPk(primaryKey)
    res.send(getDataFromDataBase)
}

exports.saveCartItems=async (req,res,next)=>{

    // const getDataOfUser=await user_model.findByPk(1)
    // if(getDataOfUser===null)
    // {
    //     await user_model.create()
    // }
    // //await cart.sync()
    // let id=req.body.id
    // let imageurl=req.body.imageurl
    // let price=req.body.price
    // let title=req.body.title
    // //await cart.sync()

    // const waitForSavingCartItem=await cart.create({id:id,imageurl:imageurl,price:price,title:title})
    // const waitForGettingDataOfCart=await req.user.getCart()
    // const getProductsOfCart=waitForGettingDataOfCart.getProducts()
    // console.log(getProductsOfCart,'i am available in cartItem')
    // const getCartId=Cart.findAll({where:{userId:req.user.id}})
    // const saveCartItems=cartItems.findAll({where:{cartId:getCartId.id}})
    // console.log('i want to save my cartItems')


//     // MY METHOD STARTS HERE

//     const productId=req.body.id
//     let getCartOfDataParticularLoggedInUser=await Cart.findAll({where:{userId:req.user.id}})
//     //console.log(getCartOfDataParticularLoggedInUser[0].id,'i am trying to find Id')
//     let cartIdOfLoggedInUser=getCartOfDataParticularLoggedInUser[0].id
//     let findProducts=await cartItems.findAll({where:{cartId:cartIdOfLoggedInUser,productId:productId}})
//   // console.log(findProducts,'hey i find relevant products')
//     if(findProducts.length==0)
//     {
//         // for(let i=0;i>findProducts.length;i=i+1)
//         // {
//         //     let serachForProduct=
//         // }
//         const saveItemInCartDataBase=await cartItems.create({quantity:1,cartId:cartIdOfLoggedInUser,productId:productId})
//         //console.log('items saved to database')


        

//     }
//     else{
//         let quantityOfProduct=findProducts[0].quantity
//         let newQuantity=quantityOfProduct+1
//         let waitForUpdatingCartDatabase=await cartItems.update({quantity:newQuantity},{
//             where:{cartId:cartIdOfLoggedInUser,productId:productId}
//         })


        // MY METHODS ENDS HERE

        //---Standard Methods---
        const productId=req.body.id
        const userId=req.user.id
        
        const getCartDataForLoggedInUser=await req.user.getCart()
        //console.log(getCartDataForLoggedInUser,'getCartDataForLoggedInUser')
        //const cartIdOfLoggedInUser=getCartDataForLoggedInUser.id
        const getDataOfAlreadyPresentItems=await getCartDataForLoggedInUser.getProducts({where:{id:productId}})
       //console.log(getDataOfAlreadyPresentItems,'getCartDataForLoggedInUserFromCartItems')
       const getProductIdOfAlreadyPresentItem=await Product.findByPk(productId)
       let addingNewProductToDatabase;

        if(getDataOfAlreadyPresentItems.length>0)
        {
            const quantityOfAlreadyPresentData=getDataOfAlreadyPresentItems[0].cartItem.quantity
            const newQuantity=quantityOfAlreadyPresentData+1
            


             addingNewProductToDatabase=await getCartDataForLoggedInUser.addProduct(getDataOfAlreadyPresentItems[0],{through:{quantity:newQuantity}})
            //  const a=await getCartDataForLoggedInUser.hasProduct()
            //  console.log(a)

        }
        else{
            const newQuantity=1
             addingNewProductToDatabase=await getCartDataForLoggedInUser.addProduct(getProductIdOfAlreadyPresentItem,{through:{quantity:newQuantity}})

        }


        res.send({})

        //Standard Methods Ends Here

        
    }
    //console.log(findProducts,'i am able to find products')

    //console.log(findProducts,'i am trying hard from my end')



    


exports.getUserDataForCart=async (req,res,next)=>{

    
    const page=req.query.page
    const items_per_page=1
    //let getDataForCartToCalculatePage=await cart.count()
    
    // const getDataForUser=await Cart.findAll({where:{userId:req.user.id}})

    // const cartAllottedToParticularUser=getDataForUser[0].id
    //console.log(getDataForCart.cart.dataValues,'i am in cart database')
    //  const getDataForCartToCalculateQuantity=await cartItems.findAll({where:{cartId:cartAllottedToParticularUser}})
    //  console.log(getDataForCartToCalculateQuantity[0])
     //console.log(getDataForCartToCalculateQuantity[0].quantity)
    //  let array=[]
    //  for(let i=0;i<getDataForCartToCalculateQuantity.length;i=i+1)
    //  {
    //     //console.log(getDataForCartToCalculateQuantity[i].quantity,getDataForCartToCalculateQuantity[i].productId)


    //  }
    //  console.log(array)
    //console.log(getDataForCart)
    // console.log(getCartItems,'hey i got all cart itrms')
    // //let getDataForCart=""
    // let output=""

    // for(let i=0;i<getCartItems.length;i=i+1)
    // {
    //     output=output+[{quantity:getCartItems[i].quantity,product:getCartItems[i].}]
        
    // }
    // const userIdOfLoggedInUser=req.user.id

    // const getDataForCart=await Product.findAll({where:{userId:userIdOfLoggedInUser}})
    // const getDataForCartToCalculatePage=getDataForCart.length

    const getUserCart=await req.user.getCart()
    const getDataForDisplayingOnFrontend=await getUserCart.getProducts({offset:(page-1)*items_per_page,limit:2})
    const getDataForCartToCalculatePage=getDataForDisplayingOnFrontend.length





    res.json({
        data:getDataForDisplayingOnFrontend,
        key:{
            currentPage:+page,
        nextPage:+page+1,
        hasNextPage:items_per_page*page<getDataForCartToCalculatePage,
        hasPreviousPage:page>1,
        previousPage:+page-1,
        lastPage:Math.ceil(getDataForCartToCalculatePage/items_per_page)

        }

    })

    //res.send(getDataForCart)
}
exports.createOrderTable=async (req,res,next)=>{

    // const getUserDetails=await req.user.getCart()
    // const getUserProductsDetails=await getUserDetails.getProducts()

    // await req.user.createOrder()
    const waitForUserUpdation=await req.user.createOrder()
    const waitForGettingProductsInCart=await req.user.getCart()
    const waitForGettingRelatedCartItems=await waitForGettingProductsInCart.getProducts()
    //console.log(waitForGettingRelatedCartItems,'i want to resolve my doubt')
    //console.log(waitForGettingRelatedCartItems,'hey i want to find cart items in cart table')

    for (let i=0;i<waitForGettingRelatedCartItems.length;i=i+1)
    {
        await waitForGettingRelatedCartItems[i].addOrder(waitForUserUpdation,{through:{quantity:waitForGettingRelatedCartItems[i].cartItem.quantity}})
    }

    const waitForDestroyingCartItems=await waitForGettingProductsInCart.setProducts([])
    const orderId=waitForUserUpdation.id

    res.json({orderId})




}

exports.getOldOrderData=async (req,res,next)=>{

//     const waitForGettingOrderId=await req.user.getOrders()
//     //console.log(waitForGettingOrderId,'i got all my previous order ids')
//     //for(let i=0;i<)

//    //console.log(waitForGettingOrderId,'i want to get previous order details')
//    for(let i=0;i<waitForGettingOrderId.length;i=i+1)
//    {
//         const waitForGettingOrderDetails=await waitForGettingOrderId[i].getProducts()

        


//    }
   const previousOrderData=await orderData.findAll()
   const array=[]
   //console.log(previousOrderData,'i want to get all my previous order data')
   for(let i=0;i<previousOrderData.length;i=i+1)
   {
       const howToGetOneParticularData=await Product.findByPk(previousOrderData[i].productId)
        array.push({...howToGetOneParticularData,orderId:previousOrderData[i].orderId})

   }
   res.send(array)

   
   //console.log( howToGetOneParticularData,'i want to get all my previous order data')





    
}