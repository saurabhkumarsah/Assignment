const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const userController = require('../controller/userController')
const userModel = require('../models/userModel')

// API for Create Product
router.post('/createProduct', productController.createProduct)


// API for Create User
router.post('/createUser', userController.createUser)



module.exports = router