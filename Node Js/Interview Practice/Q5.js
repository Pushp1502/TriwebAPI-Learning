//Set time out program

function add(callby,n1,n2){
    console.log(callby,":", n1+n2);
}

setImmediate(() => {
    add("setimmediate",3,4);
}); //check que for next cycle

setTimeout(()=>{
    add("setTimeout",4,6);


}, 0); //call back register with timer queue for next cycler


add("Direct",1,2);
