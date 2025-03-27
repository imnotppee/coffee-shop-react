// 📦 Backend: Node.js (Express) เชื่อม PostgreSQL และบันทึกลงตาราง Basket

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// 🔌 เชื่อมต่อ PostgreSQL (pgAdmin)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432
});

// ✅ POST: เพิ่มสินค้าเข้า Basket
app.post('/add-to-cart', async (req, res) => {
  const { ba_name, ba_price, ba_total } = req.body; // รับข้อมูลจาก frontend

  try {
    const result = await pool.query(
      'INSERT INTO "Basket" (ba_name, ba_price, ba_total) VALUES ($1, $2, $3) RETURNING *',
      [ba_name, ba_price, ba_total]
    );
    res.status(201).json({ message: '✅ เพิ่มสินค้าลงตะกร้าสำเร็จ', item: result.rows[0] });
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการเพิ่มสินค้า:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเพิ่มสินค้า' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
