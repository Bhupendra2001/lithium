const { count } = require("console")
const OrderModel= require("../models/OrderModel")
const ProductModel = require("../models/ProductModel")
const UserModel= require("../models/UserModel")

const createOrder= async function (req, res) {
    
   // destructuring userId & productId for body
    const { userId , productId} = req.body
   
    
   const userDetails = await UserModel.findById(userId)


   // if userdetail not present
   if(!userDetails){
    return res.send({message : "user is not present"})
   }
    


   const productDetails = await ProductModel.findById(productId)



   // if productdetails not present
   if(!productDetails){
    return res.send({message : "product is not present"})
   }
    
  

    const isFreeAppUser = req.isFreeAppUser

    if(isFreeAppUser){
     
        // freeappUser -> true
        const  order = await OrderModel.create({
            userId : userId,
            productId : productId,
            amount : 0,
            isFreeAppUser : isFreeAppUser,
            date : new Date()
        })


      
        return res.send({data : order})

    }else{
         // freeappUser -> false


         // if insufficient balance  show msg
        if(userDetails.balance < productDetails.price){
           return res.send({massage : "you dont have sufficient balance"}) 
        }
       

        // if sufficient balance  create order data
        const order =await OrderModel.create( {
            userId : userId,
            productId : productId,
            amount : productDetails.price,
            isFreeAppUser : isFreeAppUser,
            date : new Date()
        })

         // We deduct the balance from user's balance and update the user
        const user = await UserModel.findByIdAndUpdate(userId , {$set : {balance : userDetails.balance - productDetails.price}})

        return res.send({data : order})
    }

}


module.exports.createOrder= createOrder
