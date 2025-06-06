import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    size: 'S',
    topping: 'none',
    sweetness: 'หวานน้อย',
    milk: 'นมสด',
    temperature: 'ร้อน',
  });
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');

  // ราคาสำหรับขนาดและท็อปปิ้ง
  const sizePrice = { S: 0, M: 10, L: 15 };
  const toppingPrice = { none: 0, pearl: 5, cream: 5 };

  // คำนวณราคาทั้งหมด
  const calcTotal = () => {
    if (!product) return 0;
    const sizeExtra = sizePrice[selectedOptions.size] || 0;
    const toppingExtra = toppingPrice[selectedOptions.topping] || 0;
    const basePrice = product.base_price || 0;
    return (basePrice + sizeExtra + toppingExtra) * quantity;
  };

  // ดึงข้อมูลสินค้า (ใช้ mock data)
  useEffect(() => {
    const mockData = {
      id: 1,
      name: "เอสเพรสโซ่บราวน์ชูการ์",
      description: "กลิ่นกาแฟหอมหวาน ชวนน่ากิน ดื่มอร่อยใจคิดถึงเธอ",
      image_url: "/images/7.png",
      base_price: 60.0,
      options: {
        sweetness: ["หวานน้อย", "หวานปกติ", "หวานมาก"],
        milk: ["นมสด", "ถั่วเหลือง", "อัลมอนด์"],
        size: [
          { label: "Size S", extra: 0 },
          { label: "Size M", extra: 10 },
          { label: "Size L", extra: 15 }
        ],
        topping: [
          { label: "ไม่เพิ่ม", extra: 0 },
          { label: "ไข่มุก", extra: 5 },
          { label: "วิปครีม", extra: 5 }
        ],
        temperature: ["ร้อน", "เย็น"]
      }
    };
    setProduct(mockData);
  }, [id]);

  // คำนวณราคาใหม่เมื่อมีการเปลี่ยนแปลงตัวเลือกหรือจำนวนสินค้า
  useEffect(() => {
    setTotal(calcTotal());
  }, [selectedOptions, quantity, product]);

  // จัดการการเปลี่ยนแปลงตัวเลือก
  const handleOptionChange = (type, value) => {
    setSelectedOptions(prev => ({ ...prev, [type]: value }));
  };

  // จัดการการเปลี่ยนแปลงจำนวนสินค้า
  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  // ฟังก์ชันสำหรับเพิ่มสินค้าในตะกร้าและส่งไปยัง backend
  const handleAddToCart = async () => {
    const unitPrice = total / quantity;
    const userId = localStorage.getItem('user_id') || 1;
    const order = {
      menu_name: product.name,
      quantity,
      unit_price: unitPrice,
      subtotal: total,
      user_id: userId,
      order_status: 'รอดำเนินการ',
      sweetness: selectedOptions.sweetness,
      milk: selectedOptions.milk,
      size: selectedOptions.size,
      topping: selectedOptions.topping,
      temperature: selectedOptions.temperature
    };

    try {
      const res = await fetch('http://localhost:4000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage('❌ Error placing order');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Error placing order');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container my-5" style={{ maxWidth: '1140px' }}>
      <div className="row">
        <div className="col-lg-5">
          <div className="border rounded p-3" style={{ backgroundColor: '#fdf8f3', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <img src={product.image_url} alt={product.name} className="img-fluid rounded mb-3" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            <div>
              <h3 style={{ color: '#5d4037', fontWeight: '700', fontSize: '2rem' }}>{product.name}</h3>
              <p className="text-muted" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ps-lg-5">
          {/* แสดงตัวเลือกสินค้า */}
          {Object.entries(product.options).map(([type, values]) => (
            <div key={type} className="mb-4">
              <strong style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>{type}:</strong><br />
              {values.map((v, index) => (
                <div className="form-check form-check-inline mt-2" key={index}>
                  <input
                    className="form-check-input custom-radio"
                    type="radio"
                    name={type}
                    id={`${type}-${index}`}
                    value={typeof v === 'string' ? v : v.label}
                    checked={selectedOptions[type] === (typeof v === 'string' ? v : v.label)}
                    onChange={() => handleOptionChange(type, typeof v === 'string' ? v : v.label)}
                  />
                  <label className="form-check-label" htmlFor={`${type}-${index}`} style={{ fontSize: '1rem', marginLeft: '6px' }}>
                    {typeof v === 'string' ? v : `${v.label} ${v.extra > 0 ? `(+${v.extra}฿)` : ''}`}
                  </label>
                </div>
              ))}
            </div>
          ))}

          {/* การเปลี่ยนแปลงจำนวนสินค้า */}
          <div className="mb-4">
            <strong style={{ fontSize: '1.2rem' }}>จำนวน:</strong>
            <div className="d-flex align-items-center gap-3 mt-2">
              <button
                className="btn"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  backgroundColor: '#efebe9',
                  border: '1px solid #a1887f',
                  color: '#5d4037'
                }}
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                minWidth: '60px',
                textAlign: 'center',
                color: '#3e2723'
              }}>
                {quantity}
              </span>
              <button
                className="btn"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  backgroundColor: '#efebe9',
                  border: '1px solid #a1887f',
                  color: '#5d4037'
                }}
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* แสดงราคาทั้งหมด */}
          <div className="mb-4">
            <strong style={{ fontSize: '1.5rem' }}>Total:</strong>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3e2723', marginLeft: '10px' }}>
              {total.toFixed(2)} ฿
            </span>
          </div>

          {/* ปุ่มเพิ่มลงตะกร้า */}
          <button
            className="btn"
            style={{
              backgroundColor: '#A99481',
              color: 'white',
              fontSize: '1.3rem',
              padding: '12px 30px',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: 'none'
            }}
            onClick={handleAddToCart}
          >
            เพิ่มลงตะกร้า
          </button>

          {message && (
            <p className="mt-3 fw-bold text-danger">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
