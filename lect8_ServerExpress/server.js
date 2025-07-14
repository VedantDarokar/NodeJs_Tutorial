import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("you are requested for home Route")
})

app.get('/srk',(req,res)=>{
   res.send("here is some info about srk") 
})

const port = 1000;

app.listen(port,()=>console.log  (`server is running on port ${port}`))