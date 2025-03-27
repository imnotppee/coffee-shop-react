import React, { useState } from 'react';

const CoffeeAndTea = () => {
  const [message, setMessage] = useState('');

  const products = [
    { img: "images/1.jpg", title: "โก้โก้", price: 40.00 },
    { img: "images/2.jpg", title: "กาแฟลาเต้", price: 40.00 },
    { img: "images/3.jpg", title: "ชานม", price: 40.00 },
    { img: "images/4.jpg", title: "อเมริกาโน่เย็น", price: 50.00 },
    { img: "images/5.jpg", title: "คาปูชิโน่", price: 50.00 },
    { img: "images/6.jpg", title: "อเมริกาโน่ส้ม", price: 60.00 },
    { img: "images/7.jpg", title: "เอสเพรสโซ่บราวน์ชูการ์บราวชูก้า", price: 60.00 },
    { img: "images/88.jpg", title: "มัทฉะลาเต้", price: 60.00 },
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
      <h2 className="text-center mb-4">Coffee/Tea</h2>
      <p className="text-center">รายการเครื่องดื่ม</p>

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
  className="btn custom-brown-btn"
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

export default CoffeeAndTea;