const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const helper = require("../util/helper.js");
router.get('/sol1', function (req, res) {
    let result = helper.find([1,2,3,4,5,6,8,9]);
    res.send(`Missing number is => ${result}`)
});
router.get('/sol2', function(req,res) {
    let result = helper.find2([101,102,103,105])
    res.send("Missing number is => "+ result)
});

module.exports = router;