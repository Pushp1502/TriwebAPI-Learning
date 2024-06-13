// Numllish coallescing ?? vs or

function printsomething(value){
    printThis = value  || "Not found";
    console.log("printThis is ", printThis)
}

let var1; //undefined
// let var1 = null;
printsomething(var1);

