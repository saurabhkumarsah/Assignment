const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const authorModel = require('../model/author')
const bookModel = require('../model/book')
const authorController = require('../controller/author.js')

// Router for Create Author Data
router.post('/createAuthor', async function(req,res) {
    let data = req.body;
    let saveData = await authorModel.create(data)
    res.send({Data: saveData});
})

// Router for Create Book Data
router.post('/createBook', async function(req,res) {
    let data = req.body;
    let saveData = await bookModel.create(data)
    res.send({Data: saveData});
})

// Router for Find Book of Chetan Bhagat
router.post('/findBook', async function(req,res) {
    let data = await authorModel.find({author_name: "Chetan Bhagat"}).select({author_id: 1, _id: 0})
    let bookData = await bookModel.find(data[0]) 
    res.send(bookData)
})

// Update the price of Two "States book" name
router.post('/updatePrice', async function(req,res) {
    let data = await bookModel.findOneAndUpdate({name: "Two states"},{price: 100},{new: true}).select({author_id: 1,price:1,_id: 0})
    let bookData = await authorModel.findOne(data[0]).select({author_name: 1,_id: 0})
    let data2 = await bookModel.find({name: "Two states"},).select({price:1,_id: 0})
    res.send({Author: bookData,Price: data2})
})

// Router for Find book from price range
router.post('/findBookByPrice', async function(req,res) {
    let dataName = await bookModel.find({price:{$gte: 50, $lte: 100}}).select({name:1,_id: 0})
    let dataId = await bookModel.find({price:{$gte: 50, $lte: 100}}).select({author_id:1,_id: 0})
    let aData = []
    for(let i=0;i<dataId.length;i++) {
        aData.push(await authorModel.find(dataId[i]).select({author_name:1,_id:0}))
    }

    res.send({AuthorName: aData, BookName: dataName})
})

module.exports = router
