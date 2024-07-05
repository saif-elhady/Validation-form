"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route")); // Assuming the router file is named 'router.ts'
require('dotenv').config();
//express app
const app = (0, express_1.default)();
app.listen(process.env.PORT_NUMBER || 5000);
//register view engine
app.set('view engine', 'ejs');
//static files
app.use(express_1.default.urlencoded({ extended: true }));
//public files
app.use(express_1.default.static('public'));
//set routes
app.use('/', route_1.default);
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
