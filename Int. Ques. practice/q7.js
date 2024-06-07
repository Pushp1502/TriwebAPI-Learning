// how to add a Duplicator on array to repeat array [1, 2].dublication() => [1,2,1,2]

// const arr = [1, 2];

const arr = [1, 2, 3, 4];

Array.prototype.duplicator = function () {
    return [...this, ...this];
}

console.log(arr.duplicator());