import express from 'express';
import router from './routes/route'; // Assuming the router file is named 'router.ts'
require('dotenv').config();

//express app
const app = express();
app.listen(process.env.PORT_NUMBER || 5000);

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.urlencoded({ extended: true }));

//public files
app.use(express.static('public'));

//set routes
app.use('/', router);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
