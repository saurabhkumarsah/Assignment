const bookModel = require('../model/bookModel')

const createBook = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ Data: saveData })
}
const bookList = async function (req, res) {
    let data = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({Data: data})
}

const getParticularBooks = async function(req,res) {
    let data = req.body
    let saveData = await bookModel.findOne(data)
    res.send(saveData)
}

const getXINRBooks = async function(req,res) {
    let regex = /[100INR]/i
    let data = await bookModel.find({"price.India": regex})
    res.send(data)
}

const getRandomBooks = async function(req,res) {
    let data = await bookModel.find({$or:[{totalPages:{$gt: 500}},{stockAvilabel: true}]})
    res.send(data)
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
