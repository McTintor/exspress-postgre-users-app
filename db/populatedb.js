#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255) UNIQUE
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon')
ON CONFLICT (username) DO NOTHING;
`;

const dbUrl = process.argv[2]; // Get the database URL from the command-line argument
if (!dbUrl) {
  console.error('Error: Please provide a database URL as an argument.');
  console.error('Usage: node populatedb.js <db-connection-string>');
  process.exit(1);
}

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: dbUrl });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding complete.");
  } catch (err) {
    console.error("Error during seeding:", err.message);
  } finally {
    await client.end();
  }
}

main();
