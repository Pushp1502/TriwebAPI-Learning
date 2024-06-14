// let arr = [1,2,3,4];
// let [a, b] = arr;

// console.log("First element", a);
// console.log("Second element", b);

// [b, a] = [a, b];

// console.log("arr is :", arr);
// console.log("First element a", a);
// console.log("Second element b", b);


//Object matching, shorthand notation
// function getstarted(){
//     let student = {
//         sname: "Azhar",
//         age: "31",
//         course: "bca",
//     }
//     return student;
// }

// var {sname, age, course} = getstarted();

// console.log(sname, age, course);


//3 Object matching, Deep notation

function getData(){
    let obj = {
        ename: "shortun",
        salary: "1lack",
        location: {
            city: "Delhi"
        }
    }
    return obj; 
}

let {ename: employee_name , salary: employee_salary, location: {city: employee_city}} = getData();

console.log("Ename: ", employee_name, "Salary: ", employee_salary,"location", employee_city);