//Check whether a string contains all the vowels a, e, i, o, u

const sentence = "hello guys , I am bugs bunny ";
let ans = false;
for (const letter of sentence) {
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    ans = true;
}

console.log(ans);
