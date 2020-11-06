const express = require('express');
const bodyParser = require('body-parser');


const {principalRoute} = require('./routes/index');


const pug = require('pug');
const app = express()


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', principalRoute);

app.listen(3000)