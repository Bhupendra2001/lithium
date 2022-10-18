const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})


// question  1
router.get('/movies',function(req,res){
    let movies = ["kgf","bahubali_2","kgf_2","RRR","puspa"]
    console.log("the list of movies"+movies)
    
    res.send(' list of movies  '+ movies)
})

// question 2
router.get('/movies/:indexNumber',function(req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const index = req.params.indexNumber
    console.log(" the list of movies "+ movies[index])
    res.send(' list of movies '+ movies[index])
})

// question 3
router.get('/movies/:index',function(req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const ind = req.params.index
    if(ind >= movies.length)
    {
        var err = "use a valid index"
    }
    res.send( `index number ${ind} value  is --> ` +(movies[ind] || err))
})

// problem 4
router.get('/films',function(req,res){

    const films = [ {
        id: 1,
       name: "The Shining"
       }, {
        id : 2,
        name: "Incendies"
       }, {
        id: 3,
        name : "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]

       console.log(films);
       res.send(films)
       
 })


// // problem 5
router.get('/films/:filmId',function(req,res){

    const films = [ {
        id: 1,
       name: "The Shining"
       }, {
        id : 2,
        name: "Incendies"
       }, {
        id: 3,
        name : "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
      
       let Id = req.params.filmId

       const film_id = films.find(x => x.id == Id)

       if(film_id)
       {
        res.send(films[Id - 1]) // because arr ind start with 0
       }else{
        res.send("No valid index");
       }
  
})

module.exports = router;