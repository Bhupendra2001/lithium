const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "Author"
//     }, 
//     price: Number,
//     ratings: Number


// }, { timestamps: true });



const  BookSchema = new mongoose.Schema({
    name : String,
    author : {
         type :ObjectId,
         ref : "newAuthor",
         required : true 
    },
    price : Number,
    ratings : Number,
    publisher : {
        type : ObjectId,
        ref : "newPublisher",
        required : true,

    },
    isHardCover : {
        type : Boolean,
        default : false
    }

},{ timestamps: true })

module.exports = mongoose.model('newBook', BookSchema)
