// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    sweetness: 'normal',
    milk: '',
    size: 'S',
    topping: '',
    type: 'cold',
  });
  const [basePrice, setBasePrice] = useState(0);
  const [toppingPrice, setToppingPrice] = useState(0);

  useEffect(() => {
    // Mock: ดึงราคาจาก backend
    setBasePrice(89); // หรือดึงจาก API
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'topping') {
      if (value === 'whipped') setToppingPrice(15);
      else if (value === 'boba') setToppingPrice(10);
      else setToppingPrice(0);
    }
  };

  const handleAddToCart = async () => {
    const res = await axios.post('http://localhost:3001/api/cart', {
      productId: 1,
      quantity,
      options: form,
      total: (basePrice + toppingPrice) * quantity,
    });
    alert('เพิ่มลงตะกร้าแล้ว');
  };

  return (
    <div className="container py-5 product-detail">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src="/images/smoothie.png" className="img-fluid" alt="smoothie" />
          <p className="mt-3 text-muted">
            สมูทตี้สตรอว์เบอร์รี่ หวานฉ่ำ กลิ่นหอมสดชื่น รสเข้มข้นเต็มคำ...
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">สมูทตี้สตรอว์เบอร์รี่</h2>

          <div className="form-group mb-3">
            <label>ระดับความหวาน</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sweetness" value="less" onChange={handleChange} />
              <label className="form-check-label">หวานน้อย</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sweetness" value="normal" onChange={handleChange} defaultChecked />
              <label className="form-check-label">หวานปกติ</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="sweetness" value="more" onChange={handleChange} />
              <label className="form-check-label">หวานมาก</label>
            </div>
          </div>

          <div className="form-group mb-3">
            <label>ชนิดนม</label><br />
            {['นมสด', 'ถั่วเหลือง', 'อัลมอนด์'].map(milk => (
              <div className="form-check form-check-inline" key={milk}>
                <input className="form-check-input" type="radio" name="milk" value={milk} onChange={handleChange} />
                <label className="form-check-label">{milk}</label>
              </div>
            ))}
          </div>

          <div className="form-group mb-3">
            <label>ขนาดแก้ว</label><br />
            {['S', 'M', 'L'].map(size => (
              <div className="form-check form-check-inline" key={size}>
                <input className="form-check-input" type="radio" name="size" value={size} onChange={handleChange} defaultChecked={size === 'S'} />
                <label className="form-check-label">Size {size}</label>
              </div>
            ))}
          </div>

          <div className="form-group mb-3">
            <label>ท็อปปิ้ง</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="topping" value="boba" onChange={handleChange} />
              <label className="form-check-label">ไข่มุก +10</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="topping" value="whipped" onChange={handleChange} />
              <label className="form-check-label">วิปครีม +15</label>
            </div>
          </div>

          <div className="form-group mb-3">
            <label>ประเภท</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="type" value="hot" onChange={handleChange} />
              <label className="form-check-label">ร้อน</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="type" value="cold" onChange={handleChange} defaultChecked />
              <label className="form-check-label">เย็น</label>
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <input type="number" className="form-control text-center mx-2" value={quantity} readOnly style={{ width: 60 }} />
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <div className="mb-3">
            <strong>Total: {(basePrice + toppingPrice) * quantity} ฿</strong>
          </div>

          <button className="btn btn-success" onClick={handleAddToCart}>
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;