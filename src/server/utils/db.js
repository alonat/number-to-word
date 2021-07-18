const mysql = require('mysql');
const createConnection = () => mysql.createConnection({
  host: 'mysql',
  user: 'alonat',
  password: 'secret',
  database: 'words'
});

module.exports = {
  createConnection,
}
