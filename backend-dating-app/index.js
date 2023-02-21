const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const { Pool } = require("pg");
// Controller Modules

//
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Create a connection pool
const pool = new Pool({
  user: "postgres", // default username for PostgreSQL is 'postgres'
  host: "localhost",
  database: "dating-app",
  password: "qwerty123456",
  port: 5432, // default port for PostgreSQL is 5432
});

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to PostgreSQL database", err);
  } else {
    console.log("Connected to PostgreSQL database at", res.rows[0].now);
  }
});

// Use the connection pool in your routes
app.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error("Error querying the database", err);
      res.status(500).send("Internal server error");
    } else {
      res.send(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Express Bank app listening on port ${port}`);
});
