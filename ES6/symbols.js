// const person = {
//     id: 1234,
//     pname: "opaque",
// };

// const opaque = Symbol('opaque');
// person[opaque] = "Hidden data";

// // console.log(person);
// // person.id = 2;
// // console.log(person);
// // console.log(Object.getOwnPropertyNames(person));

// console.log(person[opaque]);

// const IamHardWorking = Symbol('opaque');
// console.log(person[IamHardWorking]);

// global symbol

const xyz = symbol.for('xyz');
person[xyz] = "Not hidden symbol data";
console.log(person[xyz]);

const IknowThis = symbol.for('xyz');
console.log(person[IknowThis]);


