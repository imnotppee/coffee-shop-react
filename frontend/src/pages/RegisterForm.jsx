import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-fullscreen">
      <div className="login-container">
        <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

        <form className="login-form">
          {/* Input Fields */}
          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <img src="/images/accountpage-2.png" alt="icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <img src="/images/accountpage-2.png" alt="icon" />
            <input type="tel" placeholder="Phone" />
          </div>

          <button className="login-btn">Create Account</button>

          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;