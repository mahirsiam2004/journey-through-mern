import express from "express";
const router =express.Router();
// import {Router} from "express"

router.get('/generate-token', (req,res)=>{
    const token ="token"
    res.status(200).send({
        message:"token genarated",
        token:token
    })
})

router.get("/",(req,res)=>{
    res.send("welcome")
})

export default router;