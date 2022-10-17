
const T = function() {
    let str = "  functionUp  ";
    let after_trim = str.trim();
    console.log(`befor trim string is '${str}' after trim string is : '${after_trim}'.`);
}

const change_to_lower = function() {
    let befor_str = "Hello my Name is BHUPENDRA"
    let after_str = befor_str.toLowerCase();
    console.log(`befor change string is : '${befor_str}' ,after lower case string is : '${after_str}'.`);
}

const change_to_upper = function() {
    let b_str = " Hello my Name is Bhupendra "
    let a_str = b_str.toUpperCase()
    console.log(`befor change string is : '${b_str}' ,after upper case string is '${a_str}'.`);
}

module.exports.trim = T
module.exports.changetoLowerCase = change_to_lower
module.exports.changeToUpperCase = change_to_upper


