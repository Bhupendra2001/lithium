const express = require('express');
const router = express.Router();

const A_Cont= require("../controllers/authorController")
const B_Cont= require("../controllers/bookController")
const P_Cont= require("../controllers/pubCon")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// router.get("/getAuthorsData", authorController.getAuthorsData)
// router.get("/getBooksData", bookController.getBooksData)

router.post("/createAuthor", A_Cont.createAuthor )
router.post("/createPublisher", P_Cont.createPublisher )
router.post("/createBook", B_Cont.createBook  )



router.get("/getBooks", B_Cont.getBooks)
router.get("/Books", B_Cont.Books)

module.exports = router;