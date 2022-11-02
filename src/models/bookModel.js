const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name : String,


}, { timestamps: true });


module.exports = mongoose.model('BookData', bookSchema) //users
