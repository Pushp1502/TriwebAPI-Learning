"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const userr_1 = require("../model/userr");
const registerUser = (req, res) => {
    const userName = "Pushpanjali";
    const password = "pushpa@123";
    const result = (0, userr_1.addUserToDB)(userName, password);
    res.send(result);
};
exports.registerUser = registerUser;
