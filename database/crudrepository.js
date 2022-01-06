const mysql = require('mysql');
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
});

pool.on("acquire", function (connection) {
  console.log("---");
  console.log("Connection %d acquires", connection.threadId);
});

pool.on("release", function (connection) {
  console.log("Connection %d released", connection.threadId);
});


let connectionFunctions = {

  save: (tag, english, finnish) => { 
    function savethat(resolve, reject) { 
      pool.query(
        `INSERT INTO languageApp (tag, english, finnish) VALUES (?,?,?)`, [tag, english, finnish],
        (err) => {
        if(err) {
          reject(err);
        } else {
          resolve("New language added.");
        }
      });
    } return new Promise(savethat);
  },

  findAll: () => { 
    function find(resolve, reject) { 
      pool.query('SELECT * FROM languageApp', (err, language) => {
        if(err) {
          reject(err);
        } else {
          resolve(language);
        }
      });
    } return new Promise(find);
  },
  
  deleteById: (id) => { 
    function deleteBy(resolve, reject) { 
      pool.query(`DELETE FROM languageApp WHERE id=?`, id,(err) => {
        if(err) {
          reject(err);
        } else {
          resolve("Deleted the languageApp with id: " + id);
        }
      });
    } return new Promise(deleteBy);
  },
  
  findById: (id) => { 
    function find(resolve, reject) {
      pool.query('SELECT * FROM languageApp WHERE id=?', id, (err, locations) => {
        if(err) {
          reject(err);
        } else {
          resolve (locations);
        }
      });
    } return new Promise(find);
  }
};

module.exports = connectionFunctions