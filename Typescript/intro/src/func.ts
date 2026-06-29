function greet (name :string):string{ //parameter
    return `Hello , ${name}`
}


console.log(greet("mahir")) //argument


// function type signature

let greetFunction : (name:string)=>string;


greetFunction= function(name:string) :string{
    return `Hi , ${name}`
}

// optialnal and deafult parameter

function fun(firstname:string, lastname:string , title?:string){
    return `Hi , ${firstname} - ${lastname} how are you ? you are ${title ? title : "N/A"} right`;
}

console.log(fun("mahir", "siam"))


 function welcomeMessage(name:string = "Guest") : string{
    return `Welcome ${name}!`;
 }

console.log(welcomeMessage());