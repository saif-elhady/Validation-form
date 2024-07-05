import { Request, Response } from "express"; 

//GET HOMEPAGE
const formIndex = (req: Request, res: Response) => {
    res.render('index');
}

export default {
    formIndex
}