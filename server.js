const express = require('express');
const mysql = require('mysql2');
const { dbConfigCRUD } = require("./dbConfig/dbConfig.js");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = mysql
    .createConnection(dbConfigCRUD, { multipleStatements: true })
    .promise();
    const getMovies = async (pool) => {
        await pool.query("SELECT * FROM movies")
        
    }

    app.get('/api/movies',  (req, res) => {
       const allMovie = getMovies();
       res.send(allMovie);
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
      
