const { Client } = require('pg');

// สร้างการเชื่อมต่อกับฐานข้อมูล
const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432, // พอร์ต default ของ PostgreSQL
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL');
    
    const res = await client.query('SELECT NOW()');
    console.log('📅 Current Time:', res.rows[0]);

    await client.end();
  } catch (err) {
    console.error('❗ Error connecting to database:', err);
  }
}

connectToDatabase();
