// Write a function to count the number of vowels in a string.

function cheak_vowel(line){
    let cnt=0;
    for(const word of line){
        if(word=='a' || word=='e'|| word=='i' || word=='o' || word=='u'){
            cnt++;
        }
    }
    return cnt;
}

const life="life is not a bed of roses";
console.log(cheak_vowel(life));