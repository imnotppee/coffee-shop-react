import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ฟังก์ชันเพิ่มสินค้าลงในตะกร้า
  const addToCart = (item) => {
    setCartItems(prevItems => {
      // ตรวจสอบว่าสินค้านั้นมีอยู่ในตะกร้าหรือไม่ โดยใช้ id และตัวเลือก (options)
      const existing = prevItems.find(p =>
        p.id === item.id &&
        JSON.stringify(p.options) === JSON.stringify(item.options)
      );

      if (existing) {
        // ถ้ามีอยู่แล้ว ให้อัปเดตจำนวน โดยเพิ่มจำนวนที่เพิ่มเข้ามา
        return prevItems.map(p =>
          p.id === item.id && JSON.stringify(p.options) === JSON.stringify(item.options)
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      } else {
        // ถ้ายังไม่มี ให้เพิ่มรายการใหม่ลงในตะกร้า
        return [...prevItems, { ...item }];
      }
    });
  };

  // ฟังก์ชันอัปเดตจำนวนสินค้าในตะกร้า
  // ฟังก์ชันนี้จะตั้งค่า quantity ตามที่ผู้ใช้ปรับได้ โดยอนุญาตให้ลดลงเหลือ 0 ได้
  const updateItemQuantity = (id, newQty) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
