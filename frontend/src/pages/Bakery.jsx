import React, { useState } from 'react';

const Bakery = () => {
  const [message, setMessage] = useState('');

  const products = [
    { img: "images/product-Whole Wheat Sandwich Bread.png", title: "ขนมปังโฮลวีทแซนด์วิช", price: 45.00 },
    { img: "images/product-Croissant.png", title: "ครัวซองต์", price: 80.00 },
    { img: "images/product-Blueberry Muffin.png", title: "บลูเบอร์รี่มัฟฟิน", price: 45.00 },
    { img: "images/product-Chocolate Cake.png", title: "เค้กช็อกโกแลต", price: 55.00 },
    { img: "images/product-Pancake.png", title: "แพนเค้ก", price: 40.00 },
    { img: "images/product-Macaron.png", title: "มาการอง", price: 50.00 },
    { img: "images/product-Tart Cherry.png", title: "ทาร์ตเชอรี่", price: 60.00 },
    { img: "images/product-Tart Cheese.png", title: "ชีสทาร์ต", price: 65.00 },
  ];
  const handleAddMenu = async (product) => {
    try {
      // ✅ ดึง user_id จาก localStorage
      const user_id = localStorage.getItem('user_id');
  
      if (!user_id) {
        setMessage('❌ กรุณาเข้าสู่ระบบก่อนทำรายการ');
        return;
      }
  
      const res = await fetch('http://localhost:4000/add-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          menu_name: product.title,
          menu_price: product.price,
          menu_image: product.img,
          user_id: parseInt(user_id)  // ✅ ส่งไปให้ backend
        })
      });
  
      const data = await res.json();
      if (res.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
  
    } catch (error) {
      console.error('FETCH ERROR:', error);
      setMessage('❌ ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    }
  };
  
  return (
    <div className="w-100 py-5 px-0">
      <h2 className="text-center mb-4">Bakery</h2>
      <p className="text-center">รายการเบเกอรี่ของเรา</p>

      <section className="pb-5 w-100 px-4">
        <div className="row gx-4">
          {products.map((product, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card text-center shadow-sm border-0 h-100">
                <img
                  src={product.img}
                  alt={product.title}
                  className="card-img-top"
                  style={{ maxHeight: '150px', objectFit: 'contain', padding: '1rem' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fs-6">{product.title}</h5>
                  <p className="text-dark fw-semibold">฿{product.price.toFixed(2)}</p>
                  <div className="d-flex gap-2 justify-content-center mt-auto">
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddMenu(product)}
                    >
                      ใส่ตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {message && (
          <div className="alert alert-info text-center mt-4">
            {message}
          </div>
        )}
      </section>
    </div>
  );
};

export default Bakery;
