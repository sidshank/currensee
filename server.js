require('dotenv').config();
require('./server/db-conn');
const bodyParser = require('body-parser')
const express = require('express')
const sentry = require('@sentry/node');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/currency/', require('./server/routes/currency-routes'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

sentry.init({ dsn: 'https://a961e1613b0e4293a3eb73928148f60f@sentry.io/1773867' });

const {PORT} = process.env;
app.listen(PORT, () => console.log(`Application started on port ${PORT}`))