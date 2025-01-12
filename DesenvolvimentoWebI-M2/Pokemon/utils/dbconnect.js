'user strict';

const mysql = require('mysql');

const connect = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "12345678",
  database: "pokemon"
});

connect.connect(function(err) {
  if (err) {
    console.log('Error on database connection. ');
    throw err;
}
console.log('Database connection active. ');
});

module.exports = connect;

