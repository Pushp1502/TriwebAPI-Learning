// How to pass an arbitrary Object as this

function printName (){
    console.log(`${this.firstName} ${this.lastName}`)
}
    const student1 = {
        firstName:  "code",
        lastName: "heart",
    //     printName(){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
        // printName,   
}
// printName.apply(student1);
// printName.call(student1);
const calllItLaster = printName.bind(student1);

calllItLaster();




