import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${data.message}`);
        localStorage.setItem('token', data.token); // optional: เก็บ token
        navigate('/');
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    }
  };

  return (
    <div className="login-fullscreen">
      <div className="login-container">
      <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

      <form className="login-form" onSubmit={handleLogin}>
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {message && <div className="text-center mb-2 text-danger">{message}</div>}

        <div className="forgot">
          <Link to="/forgot-password" className="text-decoration-none text-dark">
            Forgot your password?
          </Link>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <div className="create-account">
          <Link to="/register" className="text-decoration-none text-dark">Create account</Link>
        </div>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-google"></i>
          <i className="fas fa-phone"></i>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;
