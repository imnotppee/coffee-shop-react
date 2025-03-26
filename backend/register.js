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
  