const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client('postgres://localhost:5432/juicebox-dev');

module.exports = {
  client,
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `);

  return rows;
}

// in db/index.js

async function createUser({ username, password }) {
  try {
    const result = await client.query(`
      INSERT INTO users(username, password)
      VALUES ($1, $2);
    `, [username, password]);

    return result;
  } catch (error) {
    throw error;
  }
}

// and export them
module.exports = {
  client,
  getAllUsers,
  createUser
}

// async function createUser({ username, password }) {
//   try {
//     const result = await client.query(`
//       INSERT INTO users(username, password)
//       VALUES ($1, $2);
//     `, [username, password]);

//     return result;
//   } catch (error) {
//     throw error;
//   }
// }

// // later
// module.exports = {
//   // add createUser here!
// }