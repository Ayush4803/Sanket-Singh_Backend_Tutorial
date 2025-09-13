const express=require('express')
const dotenv = require('dotenv');

const app=express()
dotenv.config()
app.get('/',(req,res)=>{
    res.send("Succesfully started the home page")
})

PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Port started on localhoast:${PORT}`)
})