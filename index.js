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

app.get('/', (req, res) => res.render('index'));

const arr = ['foo', 'bar', 'baz'];

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'classicmodels',
    password : 'bit',
    database : 'classicmodels'
});

app.get('/db', (req, res) => {
    connection.execute('SELECT productLine, textDescription FROM productlines', (err, rows) => {
        const data = rows.map(row => row);
        res.render('db', {data: data});
    });
})

app.listen(port, () => console.log(`starting server on port ${port}`));
