const numbers = [4, 5, 6, 7, 12, 45];

// let sum = 0;
// for(const num of numbers){
//     sum = sum + num
// }

const total = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(total)