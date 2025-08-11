// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longest_word(line) {
    const props = line.split(" ");
    let big = props[0].length;
    let ans = "";
    for (let i = 1; i < props.length; i++) {
        if (props[i].length > big) {
            big = props[i].length;
            ans = props[i];
        }
    }
    return ans;
}
const sentence = "I am learning Programming to become a programmer";
const finalans = longest_word(sentence);
console.log(finalans);

