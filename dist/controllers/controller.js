"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
//GET HOMEPAGE
const formIndex = (req, res) => {
    res.render('index');
};
//POST REGISTER
const postRegister = [(0, express_validator_1.check)('fullname', 'fullname is required')
        .exists(),
    (0, express_validator_1.check)('email', 'email is not valid')
        .isEmail()
        .custom((value) => value.endsWith('@gmail.com')),
    (0, express_validator_1.check)('password', 'password must be at least 5 characters long')
        .isLength({ min: 5 }),
    (0, express_validator_1.check)('password-confirm', 'password doesn\'t match')
        .custom((value, { req }) => value === req.body.password),
    (0, express_validator_1.check)('birthdate', 'Enter a valid birthday in MM/DD/YYYY format')
        .isDate({ format: 'YYYY-MM-DD' }),
    (req, res) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const formattedErrors = errors.array().map(error => ({
                message: error.msg
            }));
            return res.status(422).json({
                success: false,
                message: "Validation errors occurred",
                errors: formattedErrors
            });
        }
        return;
    }];
exports.default = {
    formIndex,
    postRegister
};
