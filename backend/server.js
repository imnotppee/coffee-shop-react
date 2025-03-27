const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// เชื่อมต่อ PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432
});

// ✅ ต้องมีตรงนี้
app.post('/add-menu', async (req, res) => {
  const { menu_name, menu_price, menu_image } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO menu (menu_name, menu_price, menu_image) VALUES ($1, $2, $3) RETURNING *',
      [menu_name, menu_price, menu_image]
    );
    res.status(201).json({ message: '✅ เพิ่มเมนูสำเร็จ', item: result.rows[0] });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: '❌ เกิดข้อผิดพลาดในการเพิ่มเมนู' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
