const express = require('express');
const router = express.Router();


const UserController= require("../controllers/userController")
const MW = require ("../middlewares/auth")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })




router.post("/createuser", UserController.createUser)

router.post("/login", UserController.loginUser)

router.get("/user/:userId", MW.authenticate, UserController.getUsersData)



router.put("/user/:userId", MW.authorize, UserController.updateUser)

router.post("/user/:userId/posts", MW.authorize, UserController.postMessage)

router.delete("/user/:userId", MW.authorize,UserController.deleteUser)






module.exports = router;