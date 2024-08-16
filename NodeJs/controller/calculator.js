module.exports.add = (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1 + n2;
    res.send(`Sum = ${sum}`);
};

module.exports.subtract = (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let diff = n1 - n2;
    res.send(`Difference = ${diff}`);
};

module.exports.multiply = (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let product = n1 * n2;
    res.send(`Total = ${product}}`);
};

module.exports.divide = (req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let Quotient = n1 / n2;
    res.send(`Division = ${Quotient}`);
};
