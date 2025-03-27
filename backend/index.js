const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432,
});


// ✅ LOGIN
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
app.post('/add-menu', async (req, res) => {
  const { menu_name, menu_price, menu_image, user_id } = req.body;

  console.log('🛒 [Add Menu] ได้รับ:', menu_name, user_id); // ✅ Debug

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

// ✅ REGISTER
app.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  console.log('✅ [Register] ได้รับข้อมูล:', { name, email, password, phone });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (user_name, email, user_password, user_phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, phone]
    );

    res.status(201).json({ message: '✅ สมัครสมาชิกสำเร็จ', user: result.rows[0] });
  } catch (err) {
    console.error('❌ [Register] error:', err);
    res.status(500).json({ message: 'สมัครไม่สำเร็จ' });
  }
});

// Endpoint สำหรับดึงข้อมูลเมนู
app.get('/menu', async (req, res) => {
  try {
    const result = await pool.query('SELECT menu_name, menu_price, menu_image FROM menu');
    res.json(result.rows); // ส่งข้อมูลเมนูกลับไปที่ frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/order', async (req, res) => {
  const { menu_name, quantity, unit_price, subtotal, user_id, order_status, sweetness, milk, size, topping, temperature } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO orders(menu_name, quantity, unit_price, subtotal, user_id, order_status, order_name, sweetness, milk, size, topping, temperature) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
      [menu_name, quantity, unit_price, subtotal, user_id, order_status, menu_name, sweetness, milk, size, topping, temperature]
    );
    res.json({ message: 'Order placed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error placing order' });
  }
});




const adminEmail = 'admin@example.com';
const adminPassword = 'admin123';

// Middleware สำหรับตรวจสอบสิทธิ์แอดมิน
const isAdmin = (req, res, next) => {
  const { email, password } = req.body; // รับข้อมูลอีเมลและรหัสผ่านจากคำขอ

  // ตรวจสอบว่าอีเมลและรหัสผ่านตรงกับข้อมูลแอดมินหรือไม่
  if (email === adminEmail && password === adminPassword) {
    next(); // ถ้าผู้ใช้เป็นแอดมิน ให้ไปยังขั้นตอนถัดไป
  } else {
    res.status(403).json({ message: 'Access denied: Not an admin' }); // ถ้าไม่ใช่แอดมิน
  }
};

// เส้นทางสำหรับแอดมิน (สามารถเข้าถึงได้เฉพาะแอดมิน)
app.post('/admin-action', isAdmin, (req, res) => {
  res.json({ message: 'Admin action performed successfully' });
});

app.post('/add-menu', async (req, res) => {
  const { menu_name, menu_price, menu_image, user_id } = req.body;

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


// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Backend รันอยู่ที่ http://localhost:${port}`);
});
