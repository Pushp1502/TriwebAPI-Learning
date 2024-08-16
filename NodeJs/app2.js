const express = require('express');
const userRoute = require('./Router/user');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("I am working");
});

app.use('/user', userRoute);

app.listen(3000);

