"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userr_1 = require("../controller/userr");
const router = express_1.default.Router();
router.post('/register', userr_1.registerUser);
exports.default = router;
