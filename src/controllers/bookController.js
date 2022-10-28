const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel =require("../models/authorModel")
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")


const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
    res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const createAuthors = async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}


const getData = async function(req, res){

    const  author  = await AuthorModel.findOne({author_name : "Chetan Bhagat"})
    const authorId = author.author_id

    const  bookList = await BookModel.find({ author_id : authorId})
    res.send({msg : bookList})
}


const updateData = async function(req,res){
    
   const updateprice = await BookModel.findOneAndUpdate({name : "Two states"},{$set :{ price : 100}},{new :true})
   const authorId = updateprice.author_id
   const author = await authorModel.findOne({author_id : authorId})
 res.send({msg : author.author_name, msg1 : updateprice.price})
}


const findData = async function(req, res){
    let data = await BookModel.find( { price : { $gte : 50 , $lte : 100}}).select({author_id:1})
    const authorId = data.map( book => book.auther_id)
    const author = await authorModel.find({auther_id : { $in : authorId}})
    const authorName = author.map( b=> b.author_name);
    res.send({msg : authorName})
}


module.exports.createBook =  createBook
module.exports.createAuthors =  createAuthors
module.exports.getData =  getData
module.exports.updateData =  updateData
module.exports.findData =  findData
 module.exports.deleteBooks= deleteBooks
