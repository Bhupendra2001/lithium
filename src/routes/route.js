const express = require('express');
const router = express.Router();///test-you

const problem1 = require('../logger/logger')
const problem2 = require('../util/helper')
const problem3 = require('../validator/formatter')
const problem4 = require('lodash')



router.get('/test-me', function (req, res) {

// problem 1 
//    let x =  problem1.myfun(); 
//    console.log(x)


// problem 2
// let a = problem2.printDate();
// console.log(a);
// let b = problem2.printMonth();
// console.log(b);
// let c = problem2.getBatchinfo();
// console.log(c);
   

// problem 3
// let p = problem3.trim()
// console.log(p);
// let q = problem3.changetoLowerCase()
// console.log(q);
// let r = problem3.changeToUpperCase()
// console.log(r);

// problem 4
let months = ["January","February","March","April","May","June","July","August","September", "October","November","December"]
console.log(problem4.chunk(months,4))

const oddNum = [1,3,5,7,9,11,13,15,17,19];
console.log(problem4.tail(oddNum));

const number = [10,20,30,40,30];
console.log(problem4.union(number))

const key_value_pair = [["Car","Rolls-Royce Ghost"],["Phone","Apple iphone 14"],["Hero","Sushant Singh Rajput"],["Heroin","Drugs"],["Next_PM","Arvind kejriwal"]];
console.log(problem4.fromPairs(key_value_pair))

res.send('My first ever api!')

//To be tried what happens if we send multiple response
//res.send('My second api!')

});

module.exports = router;

