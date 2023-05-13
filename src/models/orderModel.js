const mongoose =  require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const orderModel = new mongoose.Schema({
    userId: {
        type: objectId,
        ref: "User"
    },
    productId: {
        type: objectId,
        ref: "Product"
    },
    amount: {
        type: Number,
        default: 0
    },
    isFreeAppUser: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }

}, {timestamps: true})

module.exports = mongoose.model('Order', orderModel)