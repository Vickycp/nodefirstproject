const express = require("express")
const app = express()
const db = require('./config/db')
const ejs = require('ejs')
const cors = require('cors')
const expresslayouts = require('express-ejs-layouts')


app.set("view engine",'ejs');
app.use(expresslayouts)

 app.get("/",(req,res)=>{
     res.render(__dirname +"/views/index.ejs",{
         foo:[
             {name:"vicky"},
             {name:"lo"}
         ]
     })
 })


app.get('/about',(req,res)=>{
   res.render(__dirname +"/views/about.ejs")
})

db.then((result)=>{
    app.listen(8000,()=>{
        console.log("start")
    })
})