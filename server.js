const express = require('express');
const bodyParser = require('body-parser');


const {principalRoute, graficaWorkRoute} = require('./routes/index');


const pug = require('pug');
const app = express()

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', principalRoute);
app.get('/trabajos/:work', graficaWorkRoute);

app.listen(3000)