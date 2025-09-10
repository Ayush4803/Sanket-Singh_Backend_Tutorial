const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyparser=require('body-parser')
dotenv.config()


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server started at ${PORT} PORT`)
})