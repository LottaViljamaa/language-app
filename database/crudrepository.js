const mysql = require('mysql');
require("dotenv").config();


//Create new pool and take connect to the database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
});

//enable a new connection
pool.on("acquire", function (connection) {
  console.log("---");
  console.log("Connection %d acquires", connection.threadId);
});

//Release connection
pool.on("release", function (connection) {
  console.log("Connection %d released", connection.threadId);
});


let connectionFunctions = {

  //Add new word pair to the database
  save: (tag, english, finnish) => { 
    function savethat(resolve, reject) { 
      pool.query(
        `INSERT INTO languageApp (tag, english, finnish) VALUES (?,?,?)`, [tag, english, finnish],
        (err) => {
        if(err) {
          reject(err);
        } else {
          resolve("New word added.");
        }
      });
    } return new Promise(savethat);
  },

  //Get all data from database
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
  
  //Delete word pair with spesific id
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
  
  //Find word pair with spesific id
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
  },

  //Dind word pair with spesific category
  findByTag: (tag) => { 
    function find(resolve, reject) {
      pool.query('SELECT * FROM languageApp WHERE tag=?', tag, (err, locations) => {
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