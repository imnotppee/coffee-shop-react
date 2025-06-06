import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateItemQuantity, removeItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
      <h2 className="text-center mb-5" style={{ color: '#5e4132', fontWeight: 'bold' }}>MY CART</h2>

      <div className="row">
        <div className="col-lg-8">
          <table className="table border-0 align-middle">
            <thead>
              <tr className="text-center text-muted">
                <th>ชิ้นที่</th>
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>ยอดรวม</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td>{index + 1}</td>
                  <td className="fw-semibold text-muted">{item.name}</td>
                  <td className="text-muted">฿{item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm px-2"
                        style={btnQtyStyle}
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="form-control text-center mx-2"
                        style={{ width: '40px' }}
                        readOnly
                      />
                      <button
                        className="btn btn-sm px-2"
                        style={btnQtyStyle}
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >+</button>
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
            <button
              className="btn mt-4 w-100 fw-semibold"
              style={checkoutBtnStyle}
              onClick={() => navigate('/payment')}
            >
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
