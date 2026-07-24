const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

// app.get("/books", async (req, res) => {
//   const allBooks = await pool.query("SELECT * FROM books ORDER BY id ASC");

//   res.send(allBooks);
// });

app.get("/api/books", async (req, res) => {
  try {
    // Select all columns from books table, ordered by ID ascending
    const allBooks = await pool.query("SELECT * FROM books ORDER BY id ASC");

    // Send back HTTP 200 (OK) with the list of books
    res.status(200).json({
      total: allBooks.rowCount,
      data: allBooks.rows,
    });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ error: "Server error while fetching books" });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
