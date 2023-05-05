const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    price:{
        India: String,
        European: String
    },
    year:{
        type: String,
        default: 2021
    },
    tags:[String],
    authorName: String,
    totalPages: Number,
    stockAvilabel: Boolean
})

module.exports = mongoose.model('Book', bookSchema)
