const mongoose = require('mongoose')

const userSchema = ({
    firstName: String,
    lastName: String,
    mobile: String,
    emailId: String,
    password: String,
    gender: {
        type: String,
        emun:["male","female","other"]
    },
    age: Number,
    isDeleted: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('UserDetails', userSchema)