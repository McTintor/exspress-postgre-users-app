const pool = require("./pool");  // Import the pool instance from pool.js

async function getAllUsernames(search = "") {
  const query = search
    ? "SELECT * FROM usernames WHERE username ILIKE $1"
    : "SELECT * FROM usernames";
  const values = search ? [`%${search}%`] : [];
  
  const { rows } = await pool.query(query, values);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername
};