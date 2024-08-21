import express from 'express';
import userRoutes from './routes/userr';
//import { Request, Response } from 'express';

const app = express();


// app.get('/', (req: Request, res: Response)=>{
//     res.send("hello there");
// });

app.use('/user', userRoutes);


app.listen( process.env.PORT);

