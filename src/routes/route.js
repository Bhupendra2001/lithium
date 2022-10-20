const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');
const assignment = require('../util/assignment/missing')

const router = express.Router();
const app = express.Router();
// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get("/movies/:indexNumber", function(req, res){
//     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index value. less than 0 or greater than array (length - 1) are not valid
//     if(movieIndex<0 || movieIndex>=movies.length) {
//         //if the index is invalid send an error message
//         return res.send('The index value is not correct, Please check the it')
//     }

//     //if the index was valid send the movie at that index in response
//     let requiredMovie = movies[movieIndex]
//     res.send(requiredMovie)
// })

// router.get("/shoes", function(req, res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     let discount = queryParams.discount
//     let color = queryParams.color
//     console.log('The brand selected is ', brand)
//     console.log('The discount option selected is ', discount)
//     console.log('The color selected is ', color)
//     res.send("dummy response")
// })

// // uses query params
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// // use path param
// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })

// router.get("/films", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]
//        //send all the films
//       res.send(films) 
// })

// router.get("/films/:filmId", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        let filmId = req.params.filmId

//        //iterate all the films
//        //search for a film whose id matches with the id recevied in request
//        for(let i = 0; i < films.length; i++){
//            let film = films[i]
//            if(film.id == filmId) {
//                //if there is a match return the response from here
//                return res.send(film)
//            }
//        }

//        //if there is no match give an error response
//        res.send("The film id doesn't match any movie")
// })


// router.get("/phone",function(req,res)
// {
//     let mobile = req.query
//     const model = req.query.model
//     const ram = req.query.ram
//     const  Os = req.query.Os
//     const f_camra = req.query.f_camra
//     console.log("mobile features"+model+" "+ram+" "+Os+" "+f_camra);
//     res.send("all mobile features");
// })
//
// 






router.get("/Missing",function(req,res){
    let arr_1 = [1,2,3,4,5,7];
    let ans_1 = assignment.misNumber_1(arr_1);

    let arr_2 = [33,34,36,37,38];
    let ans_2 = assignment.misNumber_2(arr_2);
    
   res.send(`missing term in first arr is :- ${ans_1} & missing term in second arr is :- ${ans_2}`);
});



module.exports = router;
// adding this comment for no reason