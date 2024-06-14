// let str = "hiIamhere";
// let arr = Array.from(str);
// console.log(arr);

// function checkData(){
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
// }

// checkData(1,2,3,4,5,6);

// let arr = ["a","b","c","d"];
// let keys = arr.keys();

// console.log(keys);
// for(let e of keys){
//     console.log(arr[e]);
//}

// // Array .find()
// let arr = [11,12,13,14,15,16];

// let firstOddNumber = arr.find((value,index, ar) => {

// // function getOdd(value,index, ar){
//     return value%2 !=0;
// })

// console.log(firstOddNumber);


// array findIndex()

let arr = [12,13,14,15,16];

let indexofFirstOdd = arr.findIndex((value, index, ar)=>{
    return value%2 !=0;
})

console.log(indexofFirstOdd);
