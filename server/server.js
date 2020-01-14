const path = require('path');
const express = require('express');
const port= process.env.PORT || 3000;
const publicpath= path.join(__dirname + '../../public');


var app=express();

app.use(express.static(publicpath));


app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})



