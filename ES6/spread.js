// //spread parameter

// let arr = [2,3,4,5,6,7,8];
// let arr1 = [7,8];

// let combined_arr = [arr, arr1];
//     console.log(combined_arr);

// console.log(...arr);

let objstudent = {name:"amir", age:18};

let objstudent1 = {...objstudent,city:"Jalandhar"};

console.log("objStudent: ", objstudent);
console.log("objStudent 1: ", objstudent1);

objstudent1.name = "Ajit"

console.log("After update objstudent1:", objstudent1);
console.log("Again printing objstudent: ", objstudent);


