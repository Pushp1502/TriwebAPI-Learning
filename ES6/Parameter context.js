//parameter context matching
// function printtDataType1([name, age]){
//     console.log("Name is ", name);
//     console.log("Age is ", age);
// }
// printtDataType1(["steve", 42])

// function printtDataType2({name, age}){
//     console.log("Name is ", name);
//     console.log("Age is ", age);
// }
// printtDataType2({name:"steve",age: 42});

function printtDataType3({name: ename, age: eage}){
    console.log("Name is ", ename);
    console.log("Age is ", eage);
}
printtDataType3({name:"adom",age: 42});
