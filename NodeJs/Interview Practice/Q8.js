//What is Bind ?
/*
the simplest use of bind is to make a function that no matter how it is called, is called with a particular "this"
*/

let student = {
    sname: "Anzar",
    this 
    mobile: 8976857,

    getName: function(){
        console.log(this.sname);
    }
}

console.log(student);
