import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeAndTea from './pages/CoffeeAndTea';
import Bakery from './pages/Bakery';
import Snack from './pages/Snack';
import Drinks from './pages/Drinks';
import './style.css';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BiSearch, BiUser, BiShoppingBag,
  BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram
} from 'react-icons/bi';

const App = () => (
  <Router>
    <div className="bg-white">
      {/* Header */}
      <header className="container-fluid" style={{ backgroundColor: '#D4BAB0' }}>
        <div className="row py-3 border-bottom align-items-center">
          
          {/* LOGO*/}
          <div className="col-6 col-lg-2 d-flex align-items-center justify-content-start">
          <Link to="/">
              <img src="./images/logo.png" alt="LEAFF Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
          </Link>
          </div>

          {/* SEARCH*/}<div className="col-12 col-lg-8 d-flex justify-content-center">
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

          {/* ICONS*/}
          <div className="col-6 col-lg-2 d-flex justify-content-end align-items-center gap-3">
            <BiUser size={24} />
            <BiShoppingBag size={24} />
          </div>

        </div>
      </header>

      {/* Main Content */}
      <div className="w-100 py-0 px-0" style={{ margin: 0 }}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee-and-tea" element={<CoffeeAndTea />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      </div>
      {/* Footer */}
      <footer className="py-2" style={{ backgroundColor: '#D4BAB0' }}>
        <div className="container-fluid text-center">
          <Link to="/">
            <img src="images/logo.png" width="150" alt="LEAFF Logo" />
          </Link>
          <p className="fst-italic my-3">“กาแฟแก้วนี้...คือเน็นของฉัน”</p>
          <div className="d-flex justify-content-center gap-4">
            <BiLogoFacebook size={24} />
            <BiLogoTwitter size={24} />
            <BiLogoYoutube size={24} />
            <BiLogoInstagram size={24} />
          </div>
          <address className="mt-3">
            <div><strong>Address:</strong> 123 Main Street, Bangkok, Thailand</div>
            <div><strong>Email:</strong> contact@leaff.com</div>
            <div><strong>Phone:</strong> 012-345-6789</div>
          </address>
        </div>
      </footer>

      <div className="bg-dark text-light py-3 text-center">
        <p>&copy; 2024 LEAFF. All rights reserved. Made with ❤️ by your favorite coffee team.</p>
      </div>
    </div>
  </Router>
);

export default App;