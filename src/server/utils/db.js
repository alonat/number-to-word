const mysql = require('mysql');
const createConnection = () => mysql.createConnection({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'words'
});

module.exports = {
  createConnection,
}
