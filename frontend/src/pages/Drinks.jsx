import React, { useState } from 'react';

const Drinks = () => {
  const [message, setMessage] = useState('');

  const products = [
    { img: "images/product-Blue Hawaii.png", title: "บลูฮาวาย", price: "45.00" },
    { img: "images/product-Honey Lemon Soda.png", title: "น้ำผึ่งมะนาวโซดา", price: "45.00" },
    { img: "images/product-Strawberry Soda.png", title: "สตอเบอร์รี่โซดา", price: "45.00" },
  ];

  const handleAddMenu = async (product) => {
    try {
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
          user_id: parseInt(user_id)
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

    return(
    <div className="w-100 py-5 px-0" style={{ margin: 0 }}>
    <h2 className="text-center mb-4">Drinks</h2>
    <p className="text-center">รายการเครื่องดื่มของเรา</p>

    <section className="pb-5 w-100 px-4">
      <div className="row gx-4">
        {[
          { img: "images/product-Blue Hawaii.png", title: "บลูฮาวาย", price: "45.00" },
          { img: "images/product-Honey Lemon Soda.png", title: "น้ำผึ่งมะนาวโซดา", price: "45.00" },
          { img: "images/product-Strawberry Soda.png", title: "สตอเบอร์รี่โซดา", price: "45.00" },
        ].map((product, i) => (
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
                  <p className="text-dark fw-semibold">{product.price}</p>
                  <div className="d-flex gap-2 justify-content-center mt-auto">
                    <input
                      type="number"
                      defaultValue={1}
                      className="form-control text-center quantity"
                      style={{ width: '70px' }}
                    />
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
      </section>
    </div>
  );
};

export default Drinks;
