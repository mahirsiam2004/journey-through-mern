const express=require('express')
const cors=require('cors')
const app=express()
const port =3000
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('gadget heaven ');
})

app.get('/',(req,res)=>{
    res.send('all apps will be here ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
