const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const port = 4000;

// ใช้ CORS และแปลง JSON
app.use(cors());
app.use(express.json());

// ตั้งค่าการเชื่อมต่อกับ PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432,
});

// เช็คว่า backend รันได้
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// ✅ 1. เพิ่มเมนู (Add Menu)
app.post('/add-menu', async (req, res) => {
  const { menu_name, menu_price, menu_image, user_id } = req.body;
  console.log('🛒 [Add Menu] ได้รับ:', menu_name, user_id);

  try {
    const result = await pool.query(
      'INSERT INTO menu (menu_name, menu_price, menu_image, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [menu_name, menu_price, menu_image, user_id]
    );

    res.status(201).json({ message: '✅ เพิ่มเมนูสำเร็จ', item: result.rows[0] });
  } catch (error) {
    console.error('❌ เพิ่มเมนูล้มเหลว:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเพิ่มเมนู' });
  }
});

// ✅ 2. แสดงเมนูทั้งหมด (Get Menus)
app.get('/menus', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu');
    res.status(200).json(result.rows); // ส่งรายการเมนูทั้งหมด
  } catch (error) {
    console.error('❌ ไม่สามารถดึงข้อมูลเมนู:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงเมนู' });
  }
});

// ✅ 3. แสดงผู้ใช้ทั้งหมด (Get Users)
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows); // ส่งข้อมูลผู้ใช้ทั้งหมด
  } catch (error) {
    console.error('❌ ไม่สามารถดึงข้อมูลผู้ใช้:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงผู้ใช้' });
  }
});

// ✅ 4. แสดงคำสั่งซื้อทั้งหมด (Get Orders)
app.get('/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.status(200).json(result.rows); // ส่งข้อมูลคำสั่งซื้อทั้งหมด
  } catch (error) {
    console.error('❌ ไม่สามารถดึงข้อมูลคำสั่งซื้อ:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงคำสั่งซื้อ' });
  }
});

// ✅ 5. ระบบเข้าสู่ระบบ (Login)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('✅ [Login] ได้รับ:', email);

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'ไม่พบบัญชีผู้ใช้นี้' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.user_password);

    if (match) {
      res.json({ message: 'เข้าสู่ระบบสำเร็จ', userId: user.user_id });
    } else {
      res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
    }
  } catch (err) {
    console.error('❌ [Login] error:', err);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในเซิร์ฟเวอร์' });
  }
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Backend รันอยู่ที่ http://localhost:${port}`);
});
