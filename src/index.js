const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/route')

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

mongoose.connect('mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/Middleware-2', { useNewUrlparser: true })
    .then(() => console.log("MongoDB Conneted..."))
    .catch(err => console.log(err))

app.use('/', route)

app.listen((process.env.PORT || 3000), function () {
    console.log('Server is started on PORT: ', (process.env.PORT || 3000))
})
