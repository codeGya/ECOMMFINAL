let express=require('express')
let router=express.Router()
let controller=require('../CONTROLLER/controller.js')

router.get('/get-user-data',controller.getUserDetails)

router.post('/add-user',controller.addDataToBackend)
router.get('/get-user',controller.getUserDataForCart)
router.get('/get-user/:getId',controller.getOneParticularUserData)


router.post('/post-cart',controller.saveCartItems)
router.get('/create-order',controller.createOrderTable)
router.get('/get-previous-order-data',controller.getOldOrderData)

module.exports=router