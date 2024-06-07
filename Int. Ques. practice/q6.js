// how can you use Math.max - apply to find maximum number from a list

const numList = [3,5, 6, 7, 8, 99,12];
// const maximumNum = Math.max.apply(null, numList);
const maximumNum = Math.max(...numList);

console.log(maximumNum);
