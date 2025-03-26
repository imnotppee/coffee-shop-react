// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag } from 'react-icons/bi';

const Header = () => (
  <header className="container-fluid bg-light" style={{ backgroundColor: '#D4BAB0' }}>
    <div className="row py-3 border-bottom align-items-center">

      {/* Logo */}
      <div className="col-6 col-md-3 d-flex align-items-center">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="LEAFF Logo"
            className="img-fluid"
            style={{ maxWidth: '140px' }}
          />
        </Link>
      </div>

      {/* Search */}
      <div className="col-12 col-md-6 mt-3 mt-md-0">
        <div
          className="bg-white p-2 rounded-pill shadow-sm d-flex align-items-center mx-auto"
          style={{ width: '100%', maxWidth: '500px' }}
        >
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Search Products..."
          />
          <BiSearch size={24} className="ms-2 text-secondary" />
        </div>
      </div>

      {/* Icons */}
      <div className="col-6 col-md-3 d-flex justify-content-end align-items-center gap-3 mt-3 mt-md-0">
        <Link to="/login" className="text-dark"><BiUser size={24} /></Link>
        <Link to="/cart" className="text-dark"><BiShoppingBag size={24} /></Link>
      </div>

    </div>
  </header>
);

export default Header;
