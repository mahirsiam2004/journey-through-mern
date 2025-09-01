const numbers = [4, 8, 2, 3, 5];

// const doubled = []
// for (const num of numbers) {
//     const result = num * 2;
//     doubled.push(result);
// }


// const doubleIt = x => x * 2;
// const doubled = numbers.map(doubleIt);


const doubled = numbers.map(x => x * 2);
const fiveTimes = numbers.map(num => num * 5);
const squared = numbers.map(num => num * num);

const friends = ['Zaved', 'Pavel', 'Nobel', 'Kodbel'];

const nameLengths = friends.map(name => name.length);
const firstLetters = friends.map(name => name[0].toLowerCase());
const result = numbers.map((num, index) => {
    console.log(num * index)
    return index
})

console.log(result)