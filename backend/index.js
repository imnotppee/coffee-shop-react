// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const port = 4000;

// ✅ Middleware ต้องมาก่อน routes
app.use(cors());
app.use(express.json());

// ✅ เชื่อมต่อ PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432,
});

// ✅ API: /index
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   console.log('✅ ได้รับข้อมูลจาก frontend:', email, password,name,phone);

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const result = await pool.query(
//       'INSERT INTO users (email, user_password) VALUES ($1, $2) RETURNING *',
//       [email, hashedPassword]
//     );

//     res.status(201).json({ message: '✅ บันทึกผู้ใช้สำเร็จ', user: result.rows[0] });
//   } catch (err) {
//     console.error('❌ เกิดข้อผิดพลาด:', err);
//     res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึก' });
//   }
// });

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Backend รันอยู่ที่ http://localhost:${port}`);
});
