const fs =require("fs")

fs.writeFileSync("./test.txt", "this is demo for testing for sync");
;

fs.writeFile("./test.txt", "hello this is async code" , (err)=>{
    console.log(err)
})