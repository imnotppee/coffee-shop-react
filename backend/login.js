// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// ป้องกัน CORS error จาก frontend
app.use(cors());
app.use(express.json());

// เชื่อมกับ PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432,
});

// Route login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'ไม่พบผู้ใช้งานนี้' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.json({ message: 'เข้าสู่ระบบสำเร็จ', userId: user.id });
    } else {
      res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในเซิร์ฟเวอร์' });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend รันที่ http://localhost:${port}`);
});
