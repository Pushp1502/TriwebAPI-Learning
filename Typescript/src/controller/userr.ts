import { Request, Response } from 'express';
import {addUserToDB} from '../model/userr';

const registerUser = (req: Request,res: Response)=>{
    
    const userName = "Pushpanjali"
    const password = "pushpa@123"
    const result = addUserToDB(userName, password)

    res.send(result);
};

export {registerUser};   