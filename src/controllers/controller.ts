import { Request, Response } from "express"; 
import { check, validationResult} from "express-validator";


//GET HOMEPAGE
const formIndex = (req: Request, res: Response) => {
    res.render('index');
}

//POST REGISTER
const postRegister = [ check('fullname', 'fullname is required')
    .exists(),
check('email', 'email is not valid')
    .isEmail()
    .custom((value) => value.endsWith('@gmail.com')),
check('password', 'password must be at least 5 characters long')
    .isLength({ min: 5 }),
check('password-confirm', 'password doesn\'t match')
    .custom((value, { req }) => value === req.body.password),
check('birthdate', 'Enter a valid birthday in MM/DD/YYYY format')
        .isDate({ format: 'YYYY-MM-DD' }),
    (req: Request, res: Response) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const formattedErrors = errors.array().map(error => ({
                message: error.msg
            }))
            return res.status(422).json({
                success: false,
                message: "Validation errors occurred",
                errors: formattedErrors
            });
        }
    return;
}];
export default {
    formIndex,
    postRegister
}

