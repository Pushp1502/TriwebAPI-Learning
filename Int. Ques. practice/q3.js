// how do you check that 2 is passed to a function or not. 

function isTwoPassed(){
    if (Array.from(arguments).indexOf(2) >= 0){
            console.log("yes, number 2 is passed to this function")
    } else {
        console.log("no, number 2 is not passed to this function")
    }
    // console.log(Array.from(arguments).indexOf(2));
}

isTwoPassed(4,5);

