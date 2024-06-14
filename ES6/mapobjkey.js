// Being able to use an object as a key is an import map feature.

const student1 = {sname: "pushpanjali"};
const student2 = {sname: "Rihana"};

const studentMap = new Map();

studentMap.set("key1", 35);

// console.log(studentMap.get("key1"));

studentMap.set(student1, "sHe is an average student")
studentMap.set(student2, "sHe is a good student")

console.log(studentMap);