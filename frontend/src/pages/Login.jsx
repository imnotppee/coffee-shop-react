// src/pages/Login.jsx
import React from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    }
  };

  return (
    <div className="login-container">
      <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

      <form className="login-form">
        <div className="input-group">
          <img src="/images/coffee-beans.png" alt="icon" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <img src="/images/coffee-powder.png" alt="icon" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="forgot">Forgot your password?</div>

        <button className="login-btn">Login</button>

        <div className="create-account">Create account</div>

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
  );
};

export default Login;
