//constant

//constant 
//support for constant (also known as "immutable variable").
//i.e., variable which cannot be reassigned new content
////Notice: this only makes the variable itself immutable, not its assigned content
// (for intance, in case the content is an object, this means the object itself can still be altered)


// Example 1
// const a = 5;
// console.log(a);
// //a= 7;
// console.log(a)


//Example 2
const obj = {name: "ria", age: "27"};
console.log("before", obj);

//obj = {name: "pria", age: "32"};
//console.log("after", obj);

obj.name ="hared";
obj.age = 30;
console.log("after",obj);

