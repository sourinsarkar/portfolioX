import express, { Request, Response } from 'express';

const app = express();

app.post('/navDropDown', (req: Request, res: Response) => {
    console.log("navDropDown CLICKED");
    res.send({message: 'navDropDown executed'});
});

app.listen(5173, () => console.log('Server is working on port 5173'));