const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const AuthorModel= require("../models/authorModel")
const { isValidObjectId } = require('mongoose');
const { default: mongoose } = require("mongoose");

     
        
 const createBook = async function (req, res) {
    let { author , publisher } = req.body

    if(!author){
        return res.send("authorId is required" )
    }

    if(!publisher){
        return res.send("publisherId is required" )
    }
    


   if(!isValidObjectId(author)){
    return res.send({msg : "authorId is not a valid ObjectId"});
   }


   if(!isValidObjectId(publisher)){
    return res.send({msg : "publisherId is not a valid ObjectId"});
   }
     
     
    const book = req.body
    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}
        



 const getBooksWithAuthorsAndPublisher = async function(req,res){

     let bookList_with_Author_And_Publisher = await bookModel.find().populate('author').populate('publisher')
     return res.send({data :bookList_with_Author_And_Publisher});
 }




const Books = async function(req,res){

    let opration_1 = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })

    let p_Id = []
    for (let i = 0; i < opration_1.length; i++) {
        p_Id.push(opration_1[i]._id)
    }
    let Coverupdate = await bookModel.updateMany({ publisher: { $in: p_Id } }, { $set: { isHardCover: true } })




    let operation_2 = await publisherModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })

    let pubId = []
    for (let i = 0; i < operation_2.length; i++) {
        pubId.push(operation_2[i]._id)
    }
    let Priceupdate = await bookModel.updateMany({ publisher: { $in: pubId } }, { $inc: { price: 10 } })
   
    return  res.send({ Coverupdate ,Priceupdate})

}





 module.exports.getBooks = getBooksWithAuthorsAndPublisher
 module.exports.createBook= createBook
 module.exports.Books = Books