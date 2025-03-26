import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="login-fullscreen">
      <div className="login-container">
        <img src="/images/logo.png" alt="LEAFF Logo" className="logo" />

        <form className="login-form">
          <p className="mb-3">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <div className="input-group">
            <img src="/images/accountpage-1.png" alt="icon" />
            <input type="email" placeholder="Email" />
          </div>

          <button className="login-btn">Send Reset Link</button>

          <p className="mt-3">
            Remembered your password? <Link to="/login">Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
