const publisherModel = require("../models/publisherModel")


const createPublisher= async function (req, res) {
    let publis = req.body
    let publisherCreated = await publisherModel.create(publis)
    res.send({data: publisherCreated})
}

module.exports.createPublisher =  createPublisher 