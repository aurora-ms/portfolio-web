const express = require('express');
const bodyParser = require('body-parser');

const pug = require('pug');
const app = express()


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.set('views', './views');
app.set('view engine', 'pug');


app.listen(3000)