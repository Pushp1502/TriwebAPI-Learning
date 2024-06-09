//Scoping 
//Block-Scoped variables

//console.log(a);//ReferenceError: cannot access 'a' before initialization
//let a = 8;

{
    var n = 5;
    let x = 7;
    const y = 9;
}

console.log(n);
//console.log(x);//ReferenceError: x is not defined
console.log(y);

    //Block-scoped functions
