const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "movie_db",
});


app.get("/api/movies", (req, res) => {
    connection.query("SELECT * FROM movies", (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );  
});

app.get("/api/reviews", (req, res) => {
    connection.query("SELECT * FROM reviews", (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );
});
 
app.post("/api/movies", (req, res) => {
    connection.query("INSERT INTO movies (movie_name) VALUES (?)", [req.body.movie_name], (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );
});
 
app.post("/api/reviews", (req, res) => {
    connection.query("INSERT INTO reviews (movie_id, review) VALUES (?, ?)", [req.body.movie_id, req.body.review], (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );
});
 
app.put("/api/movies/:id", (req, res) => {
    connection.query("UPDATE movies SET movie_name = ? WHERE id = ?", [req.body.movie_name, req.params.id], (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );
 });

app.delete("/api/movies/:id", (req, res) => {
    connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], (err, data) => {
        if (err) throw err;
        res.json(data);
     }
    );
 });
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
