import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,      // ✅ ต้องส่งให้ตรง key!
          email,
          password,
          phone
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์');
    }
  };

  return (
    <div className="login-fullscreen">
      <div className="login-container">
        <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

        <form className="login-form" onSubmit={handleRegister}>
          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <img src="/images/accountpage-2.png" alt="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <img src="/images/accountpage-2.png" alt="icon" />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Create Account
          </button>

          {message && <p className="text-danger mt-2">{message}</p>}

          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
