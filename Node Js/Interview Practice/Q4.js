//setImmediate function study

let a = 1;
let b = 2;
function addTwoNumber(n1,n2){
    console.log(n1+n2)
}

setImmediate(() =>{
    addTwoNumber(a,b);
});    
// 1. can i call the above function inside setImmediate? 
console.log("Inside event loop 1");

//what will be the output of this program?