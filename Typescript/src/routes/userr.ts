import express from 'express';
import {registerUser} from '../controller/userr';
import { Request, Response } from 'express';

const router = express.Router();

router.post('/register', registerUser);


export default router;
