import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { CartProvider } from './context/CartContext'; // ✅ import มาใช้

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
