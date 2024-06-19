const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors()) // allow all

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../backend.env') });

// MySQL connection configuration
const dbConfig = {
  host: process.env.DB_HOST, // service name on docker-compose file
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Sample route to fetch data from the database
app.get('/api/users', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users');
    // const [rows] = [
    //   {username:'ramesh gurung'}
    // ]
    console.log('rows', rows);
    connection.end();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the backend server
// app.listen(port, () => {
app.listen(port, '0.0.0.0', () => {  
  console.log(`Backend server is running at http://localhost:${port}`);
});
