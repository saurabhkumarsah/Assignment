const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()
const url = 'mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/saurabh'

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

mongoose.connect(url, {useNewUrlparser: true})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))

app.use('/', route)

app.listen((process.env.PORT || 3000), function() {
    console.log('Server Started on Port: ',(process.env.PORT || 3000))
})