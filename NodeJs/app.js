const express = require('express');
const calculatorRouter = require('./Router/calculator');
const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("I am hhhhh");
    // res.status(200).send("I am learning");
});

// app.get('/add', (req, res)=>{
//     let n1 = 3;
//     let n2 = 8;
//     let sum = n1+n2;
//     //res.send("sum = " + sum);
//     res.send(`Sum = ${sum}`);
// });

app.use('/calculator', calculatorRouter)

app.listen(3000);

 