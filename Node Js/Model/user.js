
const db = require('../util/database');

module.exports.insert = (userData) => {
    console.log(userData);
    let query = "INSERT INTO `users`(`Name`, `Email`, `password`, `Mobile`, `Age`) VALUE (?,?,?,?,?)";
    db.execute(query,[userData.Name,userData.Email,userData.password, userData.Mobile,userData.Age]);
    return true;
}; 

