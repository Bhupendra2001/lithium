
let ip = require("ip");

const middle = function(req, res, next){

    let d = new Date()
    let current_date = d.toLocaleString()
    let IP = ip.address()
    let URL = req.url


    console.log(` ${current_date} , ${IP} , ${URL}`)
    next()
}

module.exports.middle = middle