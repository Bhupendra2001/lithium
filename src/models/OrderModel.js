const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'UserModal',
        required : true
    },

    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ProductModel',
        required : true,

    },

    amount :{
        type :Number,
        required : true
    },
    isFreeAppUser : Boolean,
    date : Date
    

}, { timestamps: true });


module.exports = mongoose.model('OrderModel', orderSchema) //users
