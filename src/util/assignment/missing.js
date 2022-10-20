
//let arr = [1,2,3,4,6,7]
const misNum_1 = (arr) => {

    let n = arr.length 
    let sum_of_arr =0
    for(let i=0;i<n;i++)
    {
        sum_of_arr += arr[i];
    }
    let N = 7;

    
    let sum_of_number = (N * (N + 1)/ 2)
    // for(let i =1;i<=N;i++)
    //     {
    //         sum_of_number += i
    //     }
    let missingNumber =   sum_of_number - sum_of_arr;
    return missingNumber
} 


 // let arr = [33,34,35,37,38];
const misNum_2 = (arr) => {
  
  
    let first = Math.min(...arr)
    let last = Math.max(...arr)
    let missing = 0;

    for(let i=first;i<= last;i++)
    {
        if(!arr.includes(i)){
            missing = i;
        }
    }
    return missing;
}
 
 
   
module.exports.misNumber_1 = misNum_1
module.exports.misNumber_2 = misNum_2