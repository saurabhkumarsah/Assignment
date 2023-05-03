const express = require('express')
const router = express.Router()
const bookModel = require('../model/bookModel')
const authorModel = require('../model/authorModel')
const publisherModel = require('../model/publisherModel')

router.get('/start', function (req, res) {
    res.send('Started...')
})
router.post('/createAuthor', async function (req, res) {
    let data = req.body
    let saveData = await authorModel.create(data);
    res.send({ "Author Details": saveData })
})

router.post('/createPublisher', async function (req, res) {
    let data = req.body
    let saveData = await publisherModel.create(data)
    res.send(saveData)
})

router.post('/createBook', async function (req, res) {
    let data = req.body
    let authorID = await authorModel.find().select({ _id: 1 })
    let publisherID = await publisherModel.find().select({ _id: 1 })
    let flag = false;
    let flag2 = false;
    for (let i = 0; i < authorID.length; i++) {
        if (authorID[i]._id == data.author) {
            flag = true;
            break;
        }
    }
    for (let j = 0; j < publisherID.length; j++) {
        if (publisherID[j]._id == data.publisher) {
            flag2 = true;
            break;
        }
    }
    if (data.author != undefined) {
        if (flag == true) {
            if (data.publisher != undefined) {
                if (flag2 == true) {
                    let saveData = await bookModel.create(data)
                    res.send({ Data: saveData })
                } else {
                    res.send("Publisher ID is not valid")
                }
            } else {
                res.send("Publisher Id is required")
            }
        } else {
            res.send("AuthorID is not matched")
        }
    } else {
        res.send("Author ID is required")
    }
})

router.get('/fetchBook', async function (req, res) {
    let data = await bookModel.find({}).populate('author').populate('publisher')
    res.send({ Data: data })
})

router.put('/updateBook', async function (req, res) {
    let data1 = await bookModel.updateMany({ publisher: { $eq: '645142c7b9ab9cdf83651712' } }, { $set: { isHardCover: true } })
    let data2 = await bookModel.updateMany({ publisher: { $eq: '64514315b9ab9cdf83651718' } }, { $set: { isHardCover: true } })

    let data3 = await bookModel.updateMany({ ratings: { $gt: 3.5 } }, { $inc: { price: 10 } })
    res.send({ Data1: data1, Data2: data2, Data3: data3 })
})

module.exports = router