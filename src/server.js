//mongoose connects node.js to mongodb
const mongoose = require('mongoose')//calling the functions and properties of mongoose to server.js
const bodyParser  = require('body-parser')
const express = require('express')
const routers = require('./router/routes')
const cors = require('cors')

// const { raw } = require('express')
const app=express()//we use app to apply the functionalities of express
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())
app.use('/',routers)
const url = 'mongodb+srv://CodeQueen:cohort@clustercodequeen.veu7lvr.mongodb.net/db'
app.use(cors())

app.use(express.static('src'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + "/todo.html")
})


//creating a port number
const port = 8000;
mongoose.connect(url,()=>{
app.listen (port,()=>{
    console.log(`running server on port ${port}`)
})
})



