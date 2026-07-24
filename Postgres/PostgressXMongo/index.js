const express = require("express");
const app = express();
app.use(express.json);
require("dotenv").config();
const { Pool } = require("pg");



const pool =new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password:process.env.password,
    port:process.env.port
});


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})