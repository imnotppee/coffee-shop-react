import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(p =>
        p.id === item.id &&
        JSON.stringify(p.options) === JSON.stringify(item.options)
      );

      if (existing) {
        return prevItems.map(p =>
          p.id === item.id && JSON.stringify(p.options) === JSON.stringify(item.options)
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      } else {
        return [...prevItems, { ...item }];
      }
    });
  };

  const updateItemQuantity = (id, newQty) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
