import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

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
      console.log('response data:', data);
      if (res.ok) {
        localStorage.setItem('user_id', data.userId);
        localStorage.setItem('token', data.token || '');
        setMessage(`✅ ${data.message}`);
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
      <div className="login-container" style={{ padding: '2rem' }}>
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

          {message && <div className="text-center mb-2">{message}</div>}

          <div className="forgot">
            <Link to="/forgot-password" className="text-decoration-none text-dark">
              Forgot your password?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="create-account">
            <Link to="/register" className="text-decoration-none text-dark">
              Create account
            </Link>
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