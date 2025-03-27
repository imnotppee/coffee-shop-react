const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'coffe',
  password: '1234',
  port: 5432
});

app.post('/add-menu', async (req, res) => {
  const { menu_name, menu_price, menu_image } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO menu (menu_name, menu_price, menu_image) VALUES ($1, $2, $3) RETURNING *',
      [menu_name, menu_price, menu_image]
    );
    res.status(201).json({ message: '✅ เพิ่มเมนูสำเร็จ', item: result.rows[0] });
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาดในการเพิ่มเมนู:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเพิ่มเมนู' });
  }
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
      console.error('❌ เพิ่มเมนูผิดพลาด:', error);
      res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเพิ่มเมนู' });
    }
  });
  

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
