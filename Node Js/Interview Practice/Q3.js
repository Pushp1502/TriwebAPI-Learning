//What is the Call() ?

function product(productName, price){
   this.productName = productName;
   this.price = price
}

function student(sname, productName, price){
    // this.productName = productName;
    // this.price = price;
    product.call(this, productName, price);
    this.sname = sname;
}

const student1 = new student("Aakarsh", "laptop", 20000);
console.log(student1.sname, "Bought a", student1.productName, 'for Rs ', student1.price);


// const p1 = new product("laptop", 10000);
// const p2 = new product("mouse pad", 10);

// product("laptop", 100000);

// console.log(p1);
//console.log(p2);


