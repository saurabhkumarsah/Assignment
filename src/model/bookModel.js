const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId;

const newBook = new mongoose.Schema({
    name: String,
    author: {
        type: objectId,
        ref: 'newAuthor'
    },
    isHardCover: {
        type: Boolean,
        default: false
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: objectId,
        ref: "newPublisher"
    }
}, { timestamps: true })

module.exports = mongoose.model("Book1", newBook)