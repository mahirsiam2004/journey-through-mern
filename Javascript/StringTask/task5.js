//Capitalize Every first Letter of each word in a String

let sentence = "hello guys I am bugs bunny I am extremely fucked up";

let ans = sentence.split(' ');

for (let i = 0; i < ans.length; i++) {
  ans[i] = ans[i][0].toUpperCase() + ans[i].slice(1);
}

console.log(ans.join(' '));  
