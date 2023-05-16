const express = require('express')
const userController = require('../controller/userController')
const middleware = require('../middleware/auth')
const router = express.Router()


// For Store User Details in DataBase
router.post('/user', userController.createUser)

// For Login and Create token
router.post('/login', userController.userLogin)

// // For fetchin user details and using token validation
router.get('/users/:userId', userController.getUserDetail)

// // For updatind fields of user and using token validation
router.put('/users/:userId', userController.updateUserDetail)

// // For soft deleting user details and using token validation
router.delete('/users/:userId', userController.deleteUser)


module.exports = router