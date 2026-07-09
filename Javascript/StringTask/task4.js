//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let sentence = "hello guys , I am bugs bunny .I am extremely fucked up";

let newSentence = "";

for (let letter = 0; letter < sentence.length; letter++) {
  if (sentence[letter] === "x") {
    newSentence += "y";
  } else if (sentence[letter] === "X") {
    newSentence += "Y";
  } else {
    newSentence += sentence[letter];
  }
}

console.log(newSentence);
