import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './pages/CartContext'; // ✅ ตรวจสอบเส้นทางที่ถูกต้อง
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
