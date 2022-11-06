const express = require('express');
const router = express.Router();
const UserController= require("../controllers/UserController")
const ProductController= require("../controllers/ProductController")
const OrderController = require("../controllers/OrderController")
const MW = require("../middlewares/middle1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

router.post("/createProduct", ProductController.createProduct)

router.post("/createUser", MW.header_middle , UserController.createUser)

router.post("/createOrder", MW.header_middle, MW.validation_middle, OrderController.createOrder)



module.exports = router;