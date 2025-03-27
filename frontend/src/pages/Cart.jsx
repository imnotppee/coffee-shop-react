// src/pages/Cart.jsx
import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "สมูทตี้สตรอว์เบอร์รี่",
      image: "/images/strawberry-smoothie.jpg",
      price: 60,
      quantity: 2
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
      <h2 className="text-center mb-5" style={{ color: '#5e4132', fontWeight: 'bold' }}>MY CART</h2>

      <div className="row">
        <div className="col-lg-8">
          <table className="table border-0 align-middle">
            <thead>
              <tr className="text-center text-muted">
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>ยอดรวม</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="text-center">
                  <td className="d-flex align-items-center gap-3">
                    <img src={item.image} alt={item.name} width="80" className="rounded" />
                    <span className="fw-semibold text-muted">{item.name}</span>
                  </td>
                  <td className="text-muted">฿{item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="btn btn-sm px-2" style={btnQtyStyle}>-</button>
                      <input type="text" value={item.quantity} className="form-control text-center mx-2" style={{ width: '40px' }} readOnly />
                      <button className="btn btn-sm px-2" style={btnQtyStyle}>+</button>
                    </div>
                  </td>
                  <td className="text-muted">฿{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-lg-4">
          <div className="p-4 rounded" style={{ backgroundColor: '#f3ece6' }}>
            <h5 className="mb-3 text-muted">CART TOTALS</h5>
            <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
              <span className="fw-semibold text-muted">ยอดรวม</span>
              <span className="text-muted">฿{total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-semibold text-muted">รวม</span>
              <span className="text-muted">฿{total.toFixed(2)}</span>
            </div>

            <button className="btn mt-4 w-100 fw-semibold" style={checkoutBtnStyle}>
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const btnQtyStyle = {
  backgroundColor: '#f0e5da',
  border: '1px solid #b29883',
  color: '#5d4037',
  fontWeight: 'bold'
};

const checkoutBtnStyle = {
  backgroundColor: '#d7c3b2',
  color: '#3f2f25',
  border: 'none',
  borderRadius: '6px',
  padding: '10px',
};

export default Cart;
