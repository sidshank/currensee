/* eslint-disable no-console */
const mongoose = require('mongoose');

const {
  DB_USER, DB_PW, DB_CONN, DB_NAME,
} = process.env;

console.log(DB_CONN);

mongoose
  .connect(
    DB_CONN,
    { auth: { user: DB_USER, password: DB_PW }, useNewUrlParser: true, dbName: DB_NAME }
  )
  .then(() => console.log('Successfully connected to the database'))
  .catch(console.error);
