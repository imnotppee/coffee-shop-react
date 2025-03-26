// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag } from 'react-icons/bi';

const Header = () => (
  <header className="container-fluid" style={{ backgroundColor: '#D4BAB0' }}>
    <div className="row py-3 border-bottom align-items-center">

      {/* Logo */}
      <div className="col-6 col-lg-2 d-flex align-items-center justify-content-start">
        <Link to="/">
          <img src="/images/logo.png" alt="LEAFF Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </Link>
      </div>

      {/* Search */}
      <div className="col-12 col-lg-8 d-flex justify-content-center">
        <div
          className="bg-light p-2 rounded-pill shadow-sm d-flex align-items-center mx-auto"
          style={{ width: '100%', maxWidth: '500px' }}
        >
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Search Products..."
          />
          <BiSearch size={24} className="ms-2" />
        </div>
      </div>

      {/* Icons */}
      <div className="col-6 col-lg-2 d-flex justify-content-end align-items-center gap-3">
        <Link to="/login"><BiUser size={24} /></Link>
        <BiShoppingBag size={24} />
      </div>

    </div>
  </header>
);

export default Header;