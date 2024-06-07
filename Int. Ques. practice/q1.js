// # programs

// This repository contains the program explained in workshop and video are on YouTube Channel. 

// ## javascript Interview Questions

// [Question 1: Create Array.prototype.lastIndexOf(). Return the last element of array and if array is empty then return -1](./question1.js)


Array.prototype.last = function(){
    if(this.length) {
        return this.length == 0 ? -1 : this[this.length - 1];
    }
}
const arr = [43, 6, 90];

console.log(arr.last());
