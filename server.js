require('dotenv').config();
require('./server/db-conn');
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/currency/', require('./server/routes/currency-routes'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

const {PORT} = process.env;
app.listen(PORT, () => console.log(`Application started on port ${PORT}`))