require('dotenv').config()
const express = require('express');
const cors = require('cors');

const { errorHandler } = require('./utils');
const { createConnection } = require('./utils/db');

const app = express();

app.use(cors())

app.get('/search', (req, res) => {
  const { hash } = req.query;
  const connection = createConnection();

  connection.query('SELECT id, word FROM words WHERE hash = ?', [hash], (err, results) => {
    errorHandler(err);
    res.send(JSON.stringify(results));
  })
});

app.listen(process.env.API_PORT, () => {
  console.log(`App listening on port ${process.env.API_PORT}!`);
});
