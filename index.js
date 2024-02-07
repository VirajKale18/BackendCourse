require('dotenv').config()      
const express = require('express');

const app = express();
const  PORT = 3000



app.get('/',(req,res)=>{
    res.send("Welcome to <b>Home</b> Page");


});
app.get('/about',(req,res)=>{
    res.send("Welcome to <b>About</b> page");

});

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${process.env.PORT}!`)
});
