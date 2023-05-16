const userModel = require('../models/userModel')
const createUser = async function (req, res) {
    try {
        let data = req.body
        let saveData = await userModel.create(data)
        res.status(200).send({ Status: true, Data: saveData })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.createUser = createUser