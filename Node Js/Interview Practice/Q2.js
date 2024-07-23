//What is an Arrow Function.
const addTwoNumber = (num1, num2) => {
    return num1+num2;
}

const addHiToName = uname => {
    return "Hi" +uname;
}

const addHelloToName = uname => {
    return "Hello"+uname;
}

const result = addTwoNumber(2,3);
console.log("Result = ", result);

const hiname = addHiToName("Amita");
console.log(hiname);

const Helloname = addHelloToName("Aamar");
console.log(Helloname);


const isThis = () =>{
    console.log(this);
}
console.log(this);
isThis();