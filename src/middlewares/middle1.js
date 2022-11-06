
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const myMiddleware = function(req, res, next){
//     req.month = "November"
//     console.log('I am inside a middleware!')
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
// module.exports.myOtherMiddleware = myOtherMiddleware


const { isValidObjectId }   = require("mongoose")


const header_middle = (req, res, next) => {
   
    let isFreeAppUser = req.headers.isfreeappuser

    if(!isFreeAppUser ) {
      return  res.send({msg : "isFreeAppUser is mandtory field for everyOne"}) 
   
    }else{

      let updateData = isFreeAppUser.toLowerCase() === 'true' ? true : false
      req.isFreeAppUser = updateData
      next()
    }

    

   
}




const validation_middle = (req, res , next )=> {

  const { userId , productId } = req.body



  //  if userId not present
   if(!userId){
    res.send({msg : "userId is mandatory"})
   }

   
   //  if productId not present
   if(!productId){
    res.send({msg : "productId is mandatory"})
   }

  
   // validation for ouserId 
   if(!isValidObjectId(userId)){
    res.send({msg : "userId is not a valid ObjectId "})
   }
    
   // validation for productId
   if(!isValidObjectId(productId)){
    res.send({msg : "productId is not a valid ObjectId "})
   }

   next()

}

module.exports.header_middle = header_middle
module.exports.validation_middle = validation_middle


