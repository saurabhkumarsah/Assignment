const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const route = require('./route/routes.js')
const app = express()
const url = 'mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/saurabh-123'

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

mongoose.connect(url, { useNewUrlparser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err))

app.use('/', route)
app.listen((process.env.PORT || 3000), function () {
    console.log('Server is started on PORT: ', (process.env.PORT || 3000))
})