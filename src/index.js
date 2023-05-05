const express = require('express')
const app = express()
const route = require('./routes/route')

const globalMiddleware = function (req, res, next) {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "-"
        + (currentdate.getMonth() + 1) + "-"
        + currentdate.getFullYear() + "  "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    let ip = req.ip
    let url = req.originalUrl
    console.log(`${datetime} ${ip} ${url}`)
    next()
}

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.use(globalMiddleware)
app.use('/',route)


app.listen((process.env.PORT || 3000), function () {
    console.log('Server is started on PORT: ', (process.env.PORT || 3000))
})
