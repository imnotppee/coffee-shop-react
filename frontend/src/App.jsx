// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeAndTea from './pages/CoffeeAndTea';
import Bakery from './pages/Bakery';
import Snack from './pages/Snack';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div className="bg-white" style={{ margin: 0, padding: 0, width: '99vw' }}>
      <Header />

      <main className="w-100 py-0 px-0" style={{ margin: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee-and-tea" element={<CoffeeAndTea />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
);

export default App;