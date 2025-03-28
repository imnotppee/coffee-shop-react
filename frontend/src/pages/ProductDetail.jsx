import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

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

    const defaultOptions = {
      sweetness: mockData.options.sweetness[0],
      milk: mockData.options.milk[0],
      size: mockData.options.size[0].label,
      topping: ["ไม่เพิ่ม"],
      temperature: mockData.options.temperature[0],
    };
    setSelectedOptions(defaultOptions);
  }, []);

  useEffect(() => {
    if (product) {
      let extra = 0;
      const size = product.options.size.find(s => s.label === selectedOptions.size);
      const toppings = selectedOptions.topping || [];

      if (size) extra += size.extra;
      if (toppings.length && !toppings.includes("ไม่เพิ่ม")) {
        toppings.forEach(t => {
          const tObj = product.options.topping.find(opt => opt.label === t);
          if (tObj) extra += tObj.extra;
        });
      }

      setTotal((product.base_price + extra) * quantity);
    }
  }, [selectedOptions, quantity, product]);

  const handleOptionChange = (optionType, value) => {
    if (optionType === 'topping') {
      setSelectedOptions(prev => {
        const current = prev.topping || [];

        if (value === 'ไม่เพิ่ม') {
          return { ...prev, topping: ['ไม่เพิ่ม'] };
        }

        const withoutNone = current.filter(t => t !== 'ไม่เพิ่ม');

        if (current.includes(value)) {
          return { ...prev, topping: withoutNone.filter(t => t !== value) };
        }

        return { ...prev, topping: [...withoutNone, value] };
      });
    } else {
      setSelectedOptions(prev => ({ ...prev, [optionType]: value }));
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image_url,
      options: selectedOptions,
      price: total / quantity,
      quantity: quantity,
      total: total,
    };

    addToCart(cartItem);

    navigate('/', {
      state: {
        message: `เพิ่ม ${product.name} ลงในตะกร้าแล้ว`,
        item: cartItem,
      }
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container my-5" style={{ maxWidth: '1140px' }}>
      <div className="row">
        <div className="col-lg-5">
          <div className="border rounded p-3" style={{ backgroundColor: '#fdf8f3', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <img
              src={product.image_url}
              alt={product.name}
              className="img-fluid rounded mb-3"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#5d4037', fontWeight: '700' }}>{product.name}</h3>
            <p className="text-muted">{product.description}</p>
          </div>
        </div>

        <div className="col-lg-7 ps-lg-5">
          {Object.entries(product.options).map(([type, values]) => (
            <div key={type} className="mb-4">
              <strong style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>{type}:</strong><br />
              {values.map((v, index) => {
                const label = typeof v === 'string' ? v : v.label;
                const extra = typeof v === 'string' ? 0 : v.extra;
                const isChecked =
                  type === 'topping'
                    ? selectedOptions.topping?.includes(label)
                    : selectedOptions[type] === label;

                return (
                  <div className="form-check form-check-inline mt-2" key={index}>
                    <input
                      className="form-check-input custom-radio"
                      type={type === 'topping' ? 'checkbox' : 'radio'}
                      name={type}
                      id={`${type}-${index}`}
                      value={label}
                      checked={isChecked}
                      onChange={() => handleOptionChange(type, label)}
                    />
                    <label className="form-check-label" htmlFor={`${type}-${index}`}>
                      {label}{extra > 0 ? ` (+${extra}฿)` : ''}
                    </label>
                  </div>
                );
              })}
            </div>
          ))}

          <div className="mb-4">
            <strong style={{ fontSize: '1.2rem' }}>จำนวน:</strong>
            <div className="d-flex align-items-center gap-3 mt-2">
              <button className="btn" style={btnStyle} onClick={() => handleQuantityChange(-1)}>-</button>
              <span style={qtyText}>{quantity}</span>
              <button className="btn" style={btnStyle} onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <div className="mb-4">
            <strong style={{ fontSize: '1.5rem' }}>Total:</strong>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3e2723', marginLeft: '10px' }}>
              {total.toFixed(2)} ฿
            </span>
          </div>

          <button className="btn" style={addToCartBtn} onClick={handleAddToCart}>
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontWeight: 'bold',
  fontSize: '1.3rem',
  backgroundColor: '#efebe9',
  border: '1px solid #a1887f',
  color: '#5d4037'
};

const qtyText = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  minWidth: '60px',
  textAlign: 'center',
  color: '#3e2723'
};

const addToCartBtn = {
  backgroundColor: '#A99481',
  color: 'white',
  fontSize: '1.3rem',
  padding: '12px 30px',
  borderRadius: '8px',
  fontWeight: 'bold',
  border: 'none'
};

export default ProductDetail;