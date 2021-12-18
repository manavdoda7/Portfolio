const express=require('express')
const app = express()
const path = require('path')
require('dotenv').config()

// For Post Requests
app.use(express.urlencoded({extended:false}))
app.use(express.json())

console.log(__dirname);

// For Static Routes
app.set('view engine','ejs');
app.use('/CSS', express.static(__dirname + '/Public/CSS'))
app.use('/JS', express.static(__dirname + '/Public/JS'))
app.use('/Assets', express.static(__dirname+'/Public/Assets'))

// For Navigation
app.use('/', require('./Routes/homeRoute'))
app.use('/sendMail', require(path.join(__dirname+'/Routes/sendMail')))

// Initiating Backend on port (3000)
app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}.......`);
})