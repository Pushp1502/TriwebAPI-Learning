const express =require('express');
//const userController =require('../controller/User');
const {registerUser} = require('../controller/userr');

const router = express.Router();

router.post('/register', registerUser);


module.exports = router;