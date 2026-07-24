import express from "express";
const app = express();
import publicRoutes from "./routes/public.routes"
app.use(express.json())

app.use('/public',)



app.get("/",(req,res)=>{
    res.send("api is running")

})


app.listen(3000,()=>{
    console.log("server is running")
})