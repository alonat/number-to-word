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

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});
