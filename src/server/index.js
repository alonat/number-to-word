const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();

app.get('/', (req, res) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'mysql',
    user: 'alonat',
    password: 'secret',
    database: 'words'
  });

  connection.query('CREATE TABLE IF NOT EXISTS words (word VARCHAR(64) NOT NULL, hash VARCHAR(64) NOT NULL)', function (error) {
    if (error) throw error;
  });

  const data = fs.readFileSync(path.join('', './data/words_list.txt'))

  connection.end();
  res.send(data);
});

app.listen(3002, () => {
  console.log('App listening on port 3002!');
});
