const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors()) // allow all

// MySQL connection configuration
const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root_password',
  database: 'mydatabase'
};

// Sample route to fetch data from the database
app.get('/api/users', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users');
    // const [rows] = [
    //   {username:'ramesh gurung'}
    // ]
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
