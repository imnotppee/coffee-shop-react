// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram
} from 'react-icons/bi';

const Footer = () => (
  <>
    <footer className="py-4" style={{ backgroundColor: '#D4BAB0' }}>
      <div className="container text-center">
        <Link to="/" className="d-block mb-3">
          <img src="/images/logo.png" width="150" alt="LEAFF Logo" className="img-fluid" />
        </Link>

        <p className="fst-italic mb-3">“กาแฟแก้วนี้...คือเน็นของฉัน”</p>

        <div className="d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <BiLogoFacebook size={24} />
          <BiLogoTwitter size={24} />
          <BiLogoYoutube size={24} />
          <BiLogoInstagram size={24} />
        </div>

        <address className="text-muted small">
          <div><strong>Address:</strong> 123 Main Street, Bangkok, Thailand</div>
          <div><strong>Email:</strong> contact@leaff.com</div>
          <div><strong>Phone:</strong> 012-345-6789</div>
        </address>
      </div>
    </footer>

    <div className="bg-dark text-light py-3 text-center small">
      <p className="mb-0">
        &copy; 2024 <strong>LEAFF</strong>. All rights reserved. Made with ❤️ by your favorite coffee team.
      </p>
    </div>
  </>
);

export default Footer;
