import express from "express";
const app = express();
import userRouter from "./routes/user.routes";
// global middleware

function sayHiMiddleware(req,res,next){
console.log("hi , i am middleware ♨")
}


app.use("/api/v1/users", userRouter);

app.use(sayHiMiddleware); 

app.get("/",(req,res)=>{
    res.send("api is running")

})


app.listen(3000,()=>{
    console.log("server is running")
})