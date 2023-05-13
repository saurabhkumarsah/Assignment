const productModel = require('../models/productModel')
const createProduct = async function (req, res) {
    console.log(req.headers.name)
    let data = req.body
    let saveData = await productModel.create(data)
    res.send({ Status: true, Data: saveData })
}

module.exports.createProduct = createProduct