const productModel = require('../models/productModel')
const createProduct = async function (req, res) {
    try {
        let data = req.body
        let saveData = await productModel.create(data)
        res.status(200).send({ Status: true, Data: saveData })
    } catch (error) {
        res.send(error.message)
    }

}

module.exports.createProduct = createProduct