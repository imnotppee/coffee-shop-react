import React from 'react';
import { Link } from 'react-router-dom'; // ✅ เพิ่ม
import './Login.css';

const Login = () => {
  return (
    <div className="login-fullscreen">
      <div className="login-container">
        <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

        <form className="login-form">
          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-group">
            <img src="/images/accountpage-2.png" alt="icon" />
            <input type="password" placeholder="Password" />
          </div>

          <Link to="/forgot-password" className="forgot">Forgot your password?</Link>

          <button className="login-btn">Login</button>

          <Link to="/register" className="create-account">Create account</Link>

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
