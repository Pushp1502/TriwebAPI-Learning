//Rest Parameters -------------->

// function addNumbers(...numbers){
//     //rest parameter
//     let sum = 0;
//     numbers.forEach((e) =>{
//     sum = sum + e;  
//     })
//     return sum;
// }
// let res = addNumbers(2,3);
// console.log(res);

// let res3 = addNumbers(2,3,6);
// console.log(res3);

// let res4 = addNumbers(2, 3, 4, 6, 6, 7, 8);
// console.log(res4);


//
function addNumbers(num1, num2, ...numbers){

    console.log("Num1 - ", num1);
    console.log("Num2 - ", num2);
    console.log("Num3 - ", numbers);
}

let res4 = addNumbers(1,2,2,3,4,5,6,7,8,9,8,7);
    console.log(res4);

    
