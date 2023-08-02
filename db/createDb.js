const mysql = require("mysql2");
// const { seedDepartments, seedRoles, seedEmployees } = require("./seeds");
const dbConfig = require("../config/dbConfig.js");


const createMoviesTable = () => {
  return `CREATE TABLE movies (id INT NOT NULL AUTO_INCREMENT, movie_name VARCHAR(100) NOT NULL, PRIMARY KEY (id));`;
};

const createRoleTable = () => {
  return (
    `CREATE TABLE reviews (id INT NOT NULL AUTO_INCREMENT, movie_id INT NOT NULL, review VARCHAR(100) NOT NULL, PRIMARY KEY (id), FOREIGN KEY (movie_id) REFERENCES movies(id));`
  );
};

const buildAndSeedDatabase = async () => {

  const pool = mysql
    .createConnection(dbConfig, { multipleStatements: true })
    .promise();

  console.log("Connected as id: " + pool.config.user);
  await pool.query(`DROP DATABASE IF EXISTS movie_db;`);
  await pool.query(`CREATE DATABASE IF NOT EXISTS movie_db;`);
  await pool.query(`USE movie_db;`);
  await pool.query(createMoviesTable());
  await pool.query(createRoleTable());
  await seedDepartments(pool);
  await seedRoles(pool);
  await seedEmployees(pool);
  console.log("Database created and seeded successfully!");
  pool.end();
};

buildAndSeedDatabase();