//parameter context matching
// function printtDataType1([name, age]){
//     console.log("Name is ", name);
//     console.log("Age is ", age);
// }
// printtDataType1(["Azhar", 42])

// function printtDataType2({name, age}){
//     console.log("Name is ", name);
//     console.log("Age is ", age);
// }
// printtDataType2({name:"Azhar",age: 42});

function printtDataType3({name: ename, age: eage}){
    console.log("Name is ", ename);
    console.log("Age is ", eage);
}
printtDataType3({name:"Azhar",age: 42});
