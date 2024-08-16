//Apply() practice.

// function product(pname, price){
//     this.pname = pname;
//     this.price = price;
// }

// function user(uname, pname, price){
//     product.call(this, pname, price);
//     this.uname = uname;
//     // this.pname = pname;
//     // this.price = price;
// }

function marksDetails(...marks){
    this.subject1 = marks[0];
    this.subject2 = marks[1];
    this.subject3 = marks[2];
    this.subject4 = marks[3];
    this.subject5 = marks[4];


let status = 'pass';
marks.forEach((num) => {
    if(num < 33){
        status = 'fail';
    }
})
this.result = status;
}

function student(sname, ...marks){
    this.sname = sname;
    marksDetails.apply(this, marks)
}

//function student(sname, ...marks){
    //this.sname = sname;
    // this.subject1 = marks[0];
    // this.subject2 = marks[1];
    // this.subject3 = marks[2];
    // this.subject4 = marks[3];
    // this.subject5 = marks[4];
    //marksDetails.apply(this, marks);
//}

const std1 = new student("Amit", 50, 54, 36, 32, 80);

console.log(std1);