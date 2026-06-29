"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello , ${name}`;
}
console.log(greet("mahir")); //argument
// function type signature
let greetFunction;
greetFunction = function (name) {
    return `Hi , ${name}`;
};
// optialnal and deafult parameter
function fun(firstname, lastname, title) {
    return `Hi , ${firstname} - ${lastname} how are you ? you are ${title ? title : "N/A"} right`;
}
console.log(fun("mahir", "siam"));
//# sourceMappingURL=func.js.map