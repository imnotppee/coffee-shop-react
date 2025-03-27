import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('visa');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 2500);
  };

  const ConfirmButton = () => (
    <div className="text-end mt-4">
      <button
        className="btn"
        style={{
          backgroundColor: '#a99481',
          color: 'white',
          padding: '10px 24px',
          fontWeight: 'bold',
          borderRadius: '6px',
        }}
        onClick={handleConfirmPayment}
      >
        ยืนยันการชำระเงิน
      </button>
    </div>
  );

  const renderForm = () => {
    if (selectedMethod === 'visa') {
      return (
        <div className="col-lg-8">
          <h5><img src="/images/Visa.png" alt="visa" style={{ height: '30px' }} /></h5>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>หมายเลขบัตร</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-3 mb-3">
              <label>วันหมดอายุ</label>
              <select className="form-control">
                <option>06</option>
                <option>07</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label>ปี</label>
              <select className="form-control">
                <option>2028</option>
                <option>2029</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>ชื่อ</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <label>นามสกุล</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-3 mb-3">
              <label>CVC/CVV</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-9 mb-3" />
            <div className="col-md-12 mb-3">
              <label>ที่อยู่ใบเสร็จ</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <label>ประเทศ</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <label>เมือง</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <label>หมายเลขโทรศัพท์</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <label>รหัสไปรษณีย์</label>
              <input className="form-control" type="text" />
            </div>
          </div>
          <ConfirmButton />
        </div>
      );
    } else if (selectedMethod === 'paypal') {
      return (
        <div className="col-lg-8 d-flex flex-column justify-content-between">
          <div>
            <h5><img src="/images/Paypal.png" alt="paypal" style={{ height: '30px' }} /></h5>
            <p className="mt-4 text-muted">
              ไปที่ <a href="https://www.paypal.com/signin" target="_blank" rel="noopener noreferrer">paypal.com</a>
            </p>
          </div>
          <ConfirmButton />
        </div>
      );
    } else if (selectedMethod === 'promptpay') {
      return (
        <div className="col-lg-8 d-flex flex-column justify-content-between">
          <div className="text-center">
            <h5>
              <img src="/images/Promptpay.png" alt="promptpay" style={{ height: '30px' }} />
            </h5>
            <img
              src="/images/QR Code.png"
              alt="QR Code"
              className="img-fluid mt-3"
              style={{ maxWidth: '250px' }}
            />
            <p className="mt-2 text-muted">
              ชื่อบัญชี: นาธนวัฒน์ พุทธา <br />เลขบัญชี: xxx-x-x0647-x
            </p>
          </div>
          <ConfirmButton />
        </div>
      );
    }
  };

  return (
    <div className="container py-5">
      {/* ✅ Popup แสดงผลหลังชำระเงิน */}
      {showPopup && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white shadow p-4 rounded text-center" style={{ zIndex: 9999 }}>
          <h4 className="text-success">ชำระเงินเสร็จสิ้น</h4>
          <p>ขอบคุณที่ใช้บริการ LEAFF</p>
          <p>ระบบกำลังพากลับไปยังหน้าหลัก...</p>
        </div>
      )}

      <div className="text-center mb-4">
        <img src="/images/logo.png" alt="LEAFF Logo" style={{ maxHeight: '80px' }} />
      </div>
      <div className="mb-4">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          ⬅ ย้อนกลับ
        </button>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <h4 className="mb-4 fw-semibold">ช่องทางชำระเงิน</h4>
          <div className="d-flex flex-column gap-3">
            {['visa', 'paypal', 'promptpay'].map(method => (
              <button
                key={method}
                className={`btn ${selectedMethod === method ? 'btn-brown' : 'btn-outline-brown'} text-start`}
                onClick={() => setSelectedMethod(method)}
              >
                <img src={`/images/${method.charAt(0).toUpperCase() + method.slice(1)}.png`} alt={method} style={{ height: '40px' }} />
              </button>
            ))}
          </div>
        </div>

        {renderForm()}
      </div>
    </div>
  );
};

export default Payment;
