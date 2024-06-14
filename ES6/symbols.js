const person = {
    id: 1234,
    pname: "opaque",
};

const opaque = Symbol('opaque');
person[opaque] = "Hidden data";

// console.log(person);
// person.id = 2;
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));

console.log(person[opaque]);

const IamHardWorking = Symbol('opaque');
console.log(person[IamHardWorking]);

