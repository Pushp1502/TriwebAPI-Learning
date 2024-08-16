const {addUserToDB} = require('../model/userr');

const registerUser = (req,res)=>{
    
    const userName = "Pushpanjali"
    const password = "pushpa@123"
    const result = addUserToDB(userName, password)

    res.send(result);
};

module.exports = {registerUser};