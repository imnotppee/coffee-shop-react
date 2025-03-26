// src/components/RegisterForm.jsx
import React from 'react';
import './RegisterForm.css';

const inputs = [
  { placeholder: 'Username', icon: '/images/icons/beans.png', type: 'text' },
  { placeholder: 'Password', icon: '/images/icons/beans2.png', type: 'password' },
  { placeholder: 'Email', icon: '/images/icons/ground.png', type: 'email' },
  { placeholder: 'Phone', icon: '/images/icons/coffee.png', type: 'tel' },
];

const RegisterForm = () => {
  return (
    <div className="register-container text-center">
      <img src="/images/logo.png" alt="LEAFF Logo" className="register-logo" />

      <form className="register-form mx-auto">
        {inputs.map((item, index) => (
          <div className="input-group mb-3 align-items-center" key={index}>
            <img src={item.icon} alt="" className="input-icon" />
            <input
              type={item.type}
              className="form-control input-field"
              placeholder={item.placeholder}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 mt-3">
          Create account
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;