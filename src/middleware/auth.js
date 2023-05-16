const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const verifyMW = async function (req, res, next) {
    let userID = req.params.userId
    let token = req.headers["x-auth-token"];
    if (token) {
        let verify = jwt.verify(token, userID.toString())
        if (verify) {
            next()
        } else {
            res.send({ Status: false, Message: "User is not valid" })
        }
    } else {
        res.send({ Status: false, Message: "Token is mandatory in header" })
    }
}

module.exports.verifyMW = verifyMW