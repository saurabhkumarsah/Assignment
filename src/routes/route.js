const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const middleware = require('../middleware/auth')

// API For Store User Details in Mongo-DataBase
router.post('/user', userController.createUser)

// API For Login and Create token
router.post('/login', userController.userLogin)

// API For fetching user details through valid token 
router.get('/users/:userId', middleware.verifyMW, userController.getUserDetail)

// API For updatind fields of user through valid token 
router.put('/users/:userId', middleware.verifyMW, userController.updateUserDetail)

// API For soft deleting user details through valid token 
router.delete('/users/:userId', middleware.verifyMW, userController.deleteUser)


module.exports = router