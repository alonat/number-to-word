const readline = require('readline');
const fs = require('fs');

const { createConnection } = require('./utils/db')
const { errorHandler, getHashByWord } = require('./utils');

const MAX_LINES_PER_REQUEST = 100;

(async () => {
  try {
    const connection = createConnection();
    const promisifyQuery = (...args) => new Promise((resolve, reject) => {
      connection.query(...args, (err) => err ? reject(err) : resolve());
    });

    await promisifyQuery('CREATE TABLE IF NOT EXISTS words (id INT NOT NULL AUTO_INCREMENT, word VARCHAR(64) NOT NULL, hash VARCHAR(64) NOT NULL, PRIMARY KEY (id))')
    await promisifyQuery('TRUNCATE TABLE words');

    let rl = readline.createInterface({
      input: fs.createReadStream('./data/words_list.txt')
    });

    let linesArr = [];
    let lineCount = 0;
    for await (const line of rl) {
      if (linesArr.length === MAX_LINES_PER_REQUEST) {
        await promisifyQuery('INSERT INTO words VALUES ?', [linesArr.map((line) => [null, line, getHashByWord(line)])]);
        lineCount += MAX_LINES_PER_REQUEST
        console.log(`${lineCount} line added`)
        linesArr = [];
      }
      linesArr.push(line);
    }

    connection.query('SELECT COUNT(1) as count FROM words', (err, results) => {
      errorHandler(err);
      console.log(`Added ${results[0].count} items`);
    })
    connection.end();
  } catch (e) {
    console.error(e)
  }
})()
