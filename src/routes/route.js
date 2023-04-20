const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common');
const logger = require("../logger/logger.js");
const helper = require("../util/helper.js");
const formatter = require("../validator/formatter");
const lodash = require('lodash');
router.get('/test-me', function (req, res) {
    // Problem 1.
    console.log("Problem 1.")
    logger.welcome("Saurabh Kumar");

    // Problem 2.
    console.log("\nProblem 2.")
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    helper.date();
    helper.month();
    helper.batchInfo("Technetium","W5","D4","Node js module system");

    // Problem 3.
    console.log("\nProblem 3.")
    formatter.trim(' functionup ')
    formatter.changeToLowerCase('FUNCTIONUP')
    formatter.changeToUpperCase('functionup')

    // Problem 4.
    console.log("\nProblem 4.")
    const odd = [1,3,5,7,9,11,13,15,17,19];
    const arr1=[1,2,3,4,5], arr2=[3,4,5,6,7],arr3=[5,6,7,8,9,10],arr4=[9,10,11,12,13],arr5=[13,14,15,16,17];
    const keyValue = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    console.log("Lodash Chunk() call => ",lodash.chunk(month,4));
    console.log("Lodash tail() call => ",lodash.tail(odd));
    console.log("Lodash Union() call => ",lodash.union(arr1,arr2,arr3,arr4,arr5));
    console.log("Lodash formPairs() call => ",lodash.fromPairs(keyValue));
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;