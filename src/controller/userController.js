const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

// For storing the details of user in database
const createUser = async function (req, res) {
    let data = req.body
    let saveData = await userModel.create(data)
    res.send({ satus: true, Details: saveData })
}

// For sending token in respond
const userLogin = async function (req, res) {
    const userName = req.body.userName
    const password = req.body.password

    let userData = await userModel.findOne({ emailId: userName, password: password })
    if (userData) {
        let token = jwt.sign(userData._id.toString(), userData._id.toString())
        res.send({ Status: true, Data: token })
    } else {
        res.send({ Status: false, Message: "UserName or Password did match" })
    }
}

// For getting user details and verify token as well as
const getUserDetail = async function (req, res) {
    let userID = req.params.userId
    let token = req.headers["x-auth-token"];
    if (token) {
        let verify = jwt.verify(token, userID.toString())
        if (verify) {
            let data = await userModel.findById(userID)
            res.send({ Status: true, Data: data })
        } else {
            res.send({ Status: false, Message: "User is not valid" })
        }
    } else {
        res.send({ Status: false, Message: "Token is mandatory in header" })
    }
}

const updateUserDetail = async function (req, res) {
    let receiveData = req.body
    let userID = req.params.userId
    let token = req.headers["x-auth-token"];
    if (token) {
        let verify = jwt.verify(token, userID.toString())
        if (verify) {
            await userModel.findByIdAndUpdate(userID, receiveData)
            let data = await userModel.findById(userID)
            res.send({ Data: data })
        } else {
            res.send({ Status: false, Message: "User is not valid" })
        }
    } else {
        res.send({ Status: false, Message: "Token is mandatory in header" })
    }
}

const deleteUser = async function (req, res) {
    let receiveData = req.body
    let userID = req.params.userId
    let token = req.headers["x-auth-token"];
    if (token) {
        let verify = jwt.verify(token, userID.toString())
        if (verify) {
            await userModel.findByIdAndUpdate(userID, { isDeleted: true })
            let data = await userModel.find({ isDeleted: false })
            res.send({ Status: true, Data: data })
        } else {
            res.send({ Status: false, Message: "User is not valid" })
        }
    } else {
        res.send({ Status: false, Message: "Token is mandatory in header" })
    }
}
module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.getUserDetail = getUserDetail
module.exports.updateUserDetail = updateUserDetail
module.exports.deleteUser = deleteUser