const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/getbyDistrictId", CowinController.get_By_district_and_date)
router.get("/getweatherOflondon", CowinController.getweatherOfLondon)
router.get("/getcityweatherwithtemp",CowinController.get_all_cityWeather_With_temp)


// WRITE POST API FOR GETING THE MEMES IMG
router.post("/postmemes",CowinController.creatmemes)

module.exports = router;