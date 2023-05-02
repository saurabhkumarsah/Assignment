const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./route/route.js')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',route)
mongoose.connect("mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/saurabh-123", {useNewUrlparser: true})
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log("Server Started on PORT: ", (process.env.PORT || 3000))
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          