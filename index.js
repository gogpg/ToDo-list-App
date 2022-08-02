import express from 'express';
import handlebars from 'express-handlebars';
import mysql from 'mysql2';

const app = express();
const port = 8081;
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
   extname: 'hbs'
}));

app.get('/test', (req, res) => res.render('test'));
app.get('/test2', (req, res) => res.render('test2'));

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`starting server on port ${port}`));
