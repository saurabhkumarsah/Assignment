const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const orderController = require('../controller/orderController')
const userController = require('../controller/userController')
const middleware = require('../middlewares/middleware1')
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel')

// API for Create Product
router.post('/createProduct', productController.createProduct)

// API for Create User
router.post('/createUser', middleware.CheckIsFreeAppUser, userController.createUser)

// API for Create Order
router.post('/createOrder',middleware.CheckIsFreeAppUser, orderController.createOrder)




// API for Delete documents **only for test purpose**
router.post('/delete', async function(req,res){
    await orderModel.deleteMany({})
    res.send("success")
})


module.exports = router