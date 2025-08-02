// Count how many times a string has the letter a or A

const sentence="mahir siam";
let cnt=0;
for(const letter of sentence){
    if(letter=='a' || letter=='A') cnt++;
}

console.log(cnt);