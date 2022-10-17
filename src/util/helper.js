// problem 2

//  2.(a)
const date = function(){
    const currDate = new Date();
    console.log(currDate);
}


// 2.(b)
const month = function(){
const currmonth = new Date().toLocaleString(
    'default', {month : 'long'}
)
console.log(currmonth);
}


// 2.(c)
const batch = function()
{
    let batch_name = "lithium"
    let week = "W3D5"
    let topic = "Nodejs module system"

 console.log(`${batch_name},${week},the topic for today is ${topic}`)
}


module.exports.printDate = date      // printDate()
module.exports.printMonth = month    // printMonth()
module.exports.getBatchinfo = batch  // getBatchinfo()