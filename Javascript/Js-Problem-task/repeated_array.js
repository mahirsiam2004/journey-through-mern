// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeated_count(arr,f){
let cnt=0;
for(num of arr){
    if(num==f){
        cnt++;
    }
   
}
 return cnt;
}
const numbers = [5,6,11,12,98,5];
console.log(repeated_count(numbers,2));

