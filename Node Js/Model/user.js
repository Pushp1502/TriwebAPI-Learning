
const db = require('../util/database');

module.exports.insert = async (userData) => {
    //console.log(userData.Name);
    let id = 0;
    try {let query = "INSERT INTO `users`(`Name`, `Email`, `Mobile`, `Age`) VALUE (?,?,?,?)";
    
        //execute
        let result = await db.execute(query,[userData.Name,userData.Email, userData.Mobile,userData.Age]);
        id = result[0].insertId;

        
        //console.log(results);
    } catch (error) {
        console.log(error);
    }
    return id;

}; 

// module.exports.get = async(){

// }