const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("I am hhhhh");
    // res.status(200).send("I am learning");
});

app.get('/add', (req, res)=>{
    let n1 = 3;
    let n2 = 8;
    let sum = n1+n2;
    //res.send("sum = " + sum);
    res.send(`Sum = ${sum}`);
});

app.post(`/add`, (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1 + n2;
    res.send(`Sum = ${sum}`);
});

app.post(`/subtract`, (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let diff = n1 - n2;
    res.send(`Difference = ${diff}`);
});

app.post(`/Multiplication`, (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let product = n1 * n2;
    res.send(`Total = ${product}}`);
});

app.post(`/Division`, (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let Quotient = n1 / n2;
    res.send(`Division = ${Quotient}`);
});

app.listen(3000);

