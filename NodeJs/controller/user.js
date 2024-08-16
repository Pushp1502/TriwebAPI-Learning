const userModel = require('../Model/user');


module.exports.register = async (req, res) => {
    let insertedId = await userModel.insert(req.body);
    if(insertedId > 0){
        res.send({status: "success", data:{id:insertedId}})
    } else {
        res.send({status:"error", message:"user registration failed"});
    }
    res.send(req.body);
}

module.exports.get = (req, res) => {
    res.send(req.body);
}

module.exports.update = (req, res) => {
    res.send(req.body);
}

module.exports.delete = (req, res) => {
    res.send(req.body);
}