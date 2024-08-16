function add(callfrom,n1,n2){
    console.log(callfrom,":", n1+n2);
}

setImmediate(()=>{
    add("setImmediate", 3,5);
}, 0);

setTimeout(()=>{
    add("setTimeout", 7,5);
}, 0);

process.nextTick(()=>{
    add("process NextTick", 4,5);
});

/*
-> it puts its callback at the front of the Event Queue.
-> execute after code currently being executed, but before IO Events, or Timers
*/

add("Direct", 3,4);

