
//In models folder, {Serever.js} I have create a Server Model
//In routers, {program.router} I have created routes and logic.

const express = require('express')
const mongoose = require('mongoose')
//connection url
const url = 'mongodb+srv://root:root@cluster0.vrehy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app =express()

//connection
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=> {
    console.log('connected....')
})

//for inserting data in json format
app.use(express.json())


const ProgramRouter= require('./routers/program')
app.use('/servers',ProgramRouter)

app.listen(9000,()=> {
    console.log('server started..')
})