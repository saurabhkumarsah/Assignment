const express = require('express')
const router = express.Router()


router.get('/test', function (req, res) {
    res.send("Test");
})

router.get('/test2', function (req, res) {
    res.send("Test-2");
})

router.get('/test3', function (req, res) {
    res.send("Test-3");
})

router.get('/test4', function (req, res) {
    res.send("Test-4");
})

router.get('/test5', function (req, res) {
    let data = "Test-5 "
    res.send(data);
})

module.exports = router