// How will you write a method on instant of a date, which will give give you next date.
// Master date manuplation 


// function o to give next date 
function getnextDate(){
    let date = this.getDate();
    // console.log(date); 
    return date+1;
}

// date instance
let myDateInstance = new Date();

//Attach function to date instance
myDateInstance.getnextDate = getnextDate;


//console.log("Next T", myDateInstance);
const nextDate = myDateInstance.getnextDate();
console.log(`Next date is ${nextDate}`);
