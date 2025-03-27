import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import productImage1 from '../assets/1.jpg';
import Sidebar from '/src/components/Sidebar/Sidebar';

const categories = ['กาแฟ/ชา', 'เบเกอรี่', 'อาหารว่าง', 'เครื่องดื่ม'];

const mockProducts = [
  {
    id: 1,
    name: 'โกโก้',
    price: 45,
    status: 'เปิดขาย',
    image: productImage1,
  },
];

const MenuManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('กาแฟ/ชา');
  const [products, setProducts] = useState(mockProducts);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + amount),
    }));
  };

  const handleStatusChange = (id, status) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ marginLeft: '200px' }}>
        <h1>Hello Menu Management</h1>
      </div>
    </div>
  );
};

export default MenuManagement;