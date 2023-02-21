const express = require("express");
const router = express.Router();

// Register a new account
router.post("/api/register-account", (req, res) => {
  const data = req.body;
  const emailExistsSql = `SELECT * FROM users WHERE email = $1`;
  const values = [data.email];

  req.pool.query(emailExistsSql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Failed to register account" });
      return;
    }

    if (result.rows.length > 0) {
      res.status(400).send({ message: "Email already exists" });
      return;
    }

    const sql = `INSERT INTO users (first_name, last_name, email, phone, gender, password )
                     VALUES ($1, $2, $3, $4, $5, $6)`;
    const insertValues = [
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.gender,
      data.password,
    ];

    req.pool.query(sql, insertValues, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data was successfully written to the database");

      res.send({
        message: `Successful registration for ${data.firstName}!!`,
      });
    });
  });
});

// Authenticate a user
router.post("/api/authenticate", (req, res) => {
  // ...
});

// Export an array of all the routers
module.exports = router;
