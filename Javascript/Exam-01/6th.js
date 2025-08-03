/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var newSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
    newSalary += newSalary * 0.05;
}
console.log(newSalary.toFixed(2));