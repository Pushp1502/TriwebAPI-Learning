//Custom Interpolation
function something(string, num1, num2){
    console.log("STRING ",string);
    console.log("NAME ",num1);
    console.log("AGE ",num2);
}

let sname="Nemaye";
let age=30;
//something("Student's name is ' ' and age is ' '",sname,age);
something`Student's name is ${sname} and age is ${age}`;