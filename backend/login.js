// ✅ /login - ตรวจสอบการเข้าสู่ระบบ
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('✅ [Login] ได้รับ:', email, password);

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'ไม่มีชื่อในระบบ' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.user_password);

    if (!match) {
      return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
    }

    res.json({ message: 'เข้าสู่ระบบสำเร็จ', userId: user.user_id }); // หรือส่ง token ก็ได้
  } catch (err) {
    console.error('❌ [Login] error:', err);
    res.status(500).json({ message: 'เซิร์ฟเวอร์มีปัญหา' });
  }
});
