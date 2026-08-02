const express = require('express')
require('dotenv').config()
const app = express();
const {connectDB} = require('./src/config/db')




connectDB();




app.listen(3000,()=>{
    console.log("koapa--------chamcu")
})