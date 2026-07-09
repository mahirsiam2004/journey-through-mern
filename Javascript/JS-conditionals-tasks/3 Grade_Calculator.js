/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let sc = 62;
if (sc >= 90 && sc <= 100) {
  console.log("A");
} else if (sc >= 80 && sc <= 89) {
  console.log("B");
} else if (sc >= 70 && sc <= 79) {
  console.log("C");
} else if (sc >= 60 && sc <= 69) {
  console.log("D");
} else console.log("F");
