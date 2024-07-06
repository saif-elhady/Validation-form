import express from 'express';
import router from './routes/route'; // Assuming the router file is named 'router.ts'
require('dotenv').config();

//express app
const app = express();
app.listen(process.env.PORT_NUMBER || 5000);

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.urlencoded({ extended: false }));

//public files
app.use(express.static('public'));

//set routes
app.use('/', router);

