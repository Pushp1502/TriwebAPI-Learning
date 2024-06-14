// function updateAge(age){
//     return new Promise((resolve, reject)=>{
//         age = age + 4;
//         resolve(age);
//     })
// }

// updateAge(54)
//     .then((updatedAge)=>{
//         console.log("Update Age is ", updatedAge)
//     })


// function updateAge(age){
//     return new Promise((resolve, reject)=>{
//         if(age > 0){
//         age = age + 4;
//         resolve(age);
//         } else{
//             // reject("Invalid age");
//             throw new error("Invalid error");
//         }
//     })
// }

// updateAge(-54)
//     .then((updatedAge)=>{
//         console.log("Update Age is ", updatedAge)
//     })
//     .catch((err)=>{
//     console.log(err)
//     })


function updateAge(age){
    return new Promise((resolve, reject)=>{
    if(age > 0){
        age = age + 4;
        resolve(age);
    } else{
        // reject("Invalid age");
        throw new Error("Invalid age");
    }
})
}
    

updateAge(-54)
    .then((updatedAge) =>{
         console.log("Update Age is ", updatedAge);
    })
    .catch((err)=>{
        console.log("err: Age not updated");
    })