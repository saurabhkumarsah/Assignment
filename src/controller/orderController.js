const { CheckIsFreeAppUser } = require('../middlewares/middleware1')
const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const createOrder = async function (req, res) {
    const userIdFromBody = req.body.userId
    const productIdFromBody = req.body.productId
    const productIdFromDB = await productModel.find({}).select({ _id: 1 })
    const userIdFromDB = await userModel.find({}).select({ _id: 1 })

    if (userIdFromBody) {
        let flag = false;
        for (let i = 0; i < userIdFromDB.length; i++) {
            if (userIdFromDB[i]._id == userIdFromBody) {
                flag = true
                break;
            }
        }
        if (flag == true) {
            if (productIdFromBody) {
                let flag = false;
                for (let i = 0; i < productIdFromDB.length; i++) {
                    if (productIdFromDB[i]._id == productIdFromBody) {
                        flag = true;
                        break;
                    }
                }
                if (flag == true) {
                    const isFreeAppUser = req.headers.isfreeappuser
                    // console.log(isFreeAppUser === false)

                    if (isFreeAppUser === "false") {
                        // console.log("false")
                        // res.send("false")
                        const productAmount = await productModel.findById({ _id: productIdFromBody }).select({ _id: 0, price: 1 })
                        req.body.amount = productAmount.price
                        req.body.isFreeAppUser = req.headers.isfreeappuser
                        const userBalance = await userModel.findOne({ _id: userIdFromBody }).select({ _id: 0, balance: 1 })
                        if (userBalance.balance >= productAmount.price) {
                            const restAmount = userBalance.balance - productAmount.price;
                            await userModel.findOneAndUpdate({ _id: userIdFromBody }, { balance: restAmount })
                            const data = req.body
                            const saveData = await orderModel.create(data)
                            res.send({ Status: true, Data: saveData })
                        } else {
                            res.send("User has not suficient balance.")
                        }
                    } else {
                        // console.log("true")
                        // res.send("true")
                        req.body.isFreeAppUser = req.headers.isfreeappuser
                        const data = req.body
                        const saveData = await orderModel.create(data)
                        res.send({ Status: true, Data: saveData })
                    }

                } else {
                    res.send({ Status: false, Message: "Please, Provide valid Product ID" })
                }
            } else {
                res.send({ Status: false, Message: "Product ID is required" })
            }
        } else {
            res.send({ Status: false, Message: "Please, Provide valid User ID" })
        }
    } else {
        res.send({ Status: false, Message: "User ID is required" })
    }

}

module.exports.createOrder = createOrder