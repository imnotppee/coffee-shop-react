import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="container-fluid" style={{ backgroundColor: '#D4BAB0' }}>
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
    </div>
  </header>
);

export default Header;