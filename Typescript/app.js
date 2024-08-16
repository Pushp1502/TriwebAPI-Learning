const express = require('express');
const userRoutes = require('./routes/userr');
const app = express();

app.get('/', (req, res)=>{
    res.send("hello from me");
});

app.use('/user', userRoutes);

app.listen( process.env.PORT);
