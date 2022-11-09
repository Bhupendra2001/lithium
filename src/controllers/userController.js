const UserModel= require("../models/userModel")
const jwt = require("jsonwebtoken");


// exception handling in js using try catch & status code
const createUser= async function (req, res) {
    try{

        let data= req.body
        let savedData= await UserModel.create(data)
       return  res.status(201).send({status:"ALL GOOD and A NEW USER WAS SUCCESSFULLY CREATED" , data : savedData})
    }
    catch(err){
        console.log(err.message)
     return   res.status(500).send({ status : "SERVER ERROR",error : err.message})
    }
}

const loginUser = async function (req, res) {

    try {
      let userName = req.body.emailId;
      let password = req.body.password;
  
      let user = await UserModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(400).send({
          status: "BAD REQUEST",
          msg: "username or the password is not correct",
        });

        let token = jwt.sign(
            {
              userId: user._id.toString(),
              name: user.firstName + " " + user.lastName,
              mobile: user.mobile,
            },
            "highly confidential"
          );
      
          res.setHeader("x-auth-token", token);
      
        return  res.status(200).send({ status: "OK", data: token })
        }
        catch (err) {

         return   res.sataus(500).send({ status : "SERVER ERROR", error: err.message })
        }
  };
      


const getUsersData= async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await UserModel.findById(userId);
    
        if (!userDetails)
          return res.status(404).send({ status: "USER NOT FOUND"});
    
        return  res.status(200).send({ status: "ALL GOOD", data: userDetails });
      }
      catch (err) {
        return  res.status(500).send({ status : "SERVER ERROR",error: err.message })
      }
}


const updateUser = async function (req, res) {

    try {
      let userId = req.params.userId;
      let user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).send({status : "USER NOT FOUND"});
      }
  
      let userData = req.body;
      let updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, userData);
  
      res.status(201).send({ status: "User Data Updated", data: updatedUser });
    }
    catch (err) {
      res.status(500).send({ status : "SERVER ERROR", error: err.message })
    }
  };
  

  const postMessage = async function (req, res) {

    try {
      let message = req.body.message   
  
      let user = await UserModel.findById(req.params.userId)  
  
      if (!user) return res.status(404).send({ status: "USER NOT FOUND" })
  
      let updatedPost = user.posts     
  
      updatedPost.push(message)        
  
      let updatedUser = await UserModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPost }, { new: true })    
  
      return res.status(201).send({ status: "Post message  Updated Successfully",data : updatedUser})
    }
    catch (err) {
      res.status(500).send({ status : "SERVER ERROR",error: err.message })
    }
  }


  const deleteUser = async function (req, res) {

    try {
      let userId = req.params.userId;
      let user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).send({status : "USER NOT FOUND"});
      }
  
      let deletedUser = await UserModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } });
  
      res.status(201).send({ status: "Deleted Successfully", data: deletedUser });
    }
    catch (err) {
      res.status(500).send({ status : "SERVER ERROR" ,error: err.message })
    }
  };


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.loginUser = loginUser
module.exports.updateUser = updateUser
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser