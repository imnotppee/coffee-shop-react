import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeAndTea from './pages/CoffeeAndTea';
import Bakery from './pages/Bakery';
import Snack from './pages/Snack';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Register from './pages/RegisterForm';
import ForgotPassword from './pages/ForgotPassword';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import HeaderSecond from './components/HeaderSecond';  // ✅ Import HeaderSecond
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import MenuManagement from './pages/MenuManagement';

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppLayout = () => {
  const location = useLocation();

  // ✅ กำหนดหน้าที่จะซ่อน Header & Footer
  const hideLayoutPages = [
    "/login", "/register", "/forgot-password", 
    "/dashboardpage", "/menumanagement", "/stock", 
    "/customer", "/ordermanagement"
  ];
  
  // ✅ ตรวจสอบ path `/productdetail` (ให้ตรงกับ Route)
  const isProductDetailPage = location.pathname.toLowerCase() === "/productdetail";

  return (
    <div className="d-flex flex-column min-vh-100 bg-white container-fluid px-0">
      {/* ✅ ใช้ HeaderSecond เฉพาะหน้า /productdetail */}
      {!hideLayoutPages.includes(location.pathname.toLowerCase()) &&
        (isProductDetailPage ? <HeaderSecond /> : <Header />)}

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee-and-tea" element={<CoffeeAndTea />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route path="/menumanagement" element={<MenuManagement />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </main>

      {/* ✅ Footer จะแสดงทุกหน้าที่ยกเว้น hideLayoutPages และ /productdetail */}
      {!hideLayoutPages.includes(location.pathname.toLowerCase()) && !isProductDetailPage && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
