import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag, BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi';

const categoryLinks = [
  { label: 'Coffee/Tea', path: '/coffee-and-tea' },
  { label: 'Bakery', path: '/bakery' },
  { label: 'Snack', path: '/snack' },
  { label: 'Drinks', path: '/drinks' },
];

const Home = () => {
  const [message, setMessage] = useState('');

  const handleAddMenu = async (product) => {
    try {
      const user_id = localStorage.getItem('user_id');
      if (!user_id) {
        setMessage('❌ กรุณาเข้าสู่ระบบก่อนทำรายการ');
        return;
      }

      const cleanPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));

      const res = await fetch('http://localhost:4000/add-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          menu_name: product.title,
          menu_price: cleanPrice,
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

  return (
    <>
      <div className="bg-white">
        <section style={{ backgroundImage: "url('images/banner-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '70vh' }} className="d-flex align-items-center text-white">
          <div className="px-4">
            <h2 className="display-1 fw-bold" style={{ color: '#FFFFFF' }}>Coffee & Bakery</h2>
            <p className="lead">Freshly brewed, freshly baked</p>
          </div>
        </section>

        <section className="py-5 px-0 container-fluid">
          <h2 className="section-title text-center mb-5">Categories</h2>
          <div className="row justify-content-center gap-4">
            {categoryLinks.map((cat, i) => (
              <div key={i} className="col-auto text-center">
                <Link to={cat.path} className="text-decoration-none text-dark">
                  <img
                    src={`images/category-${i + 1}.png`}
                    className="img-fluid shadow-sm category-thumb"
                    alt={cat.label}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <h4 className="fs-6 mt-3 fw-normal">{cat.label}</h4>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-5 container-lg">
          <h2 className="section-title text-center my-4">Recommended Menu</h2>
          {message && (
            <p className="text-center text-danger fw-bold">{message}</p>
          )}
          <div className="row">
            {[
              { img: "images/7.jpg", title: "เอสเพรสโซ่บราวน์ชูการ์", price: "60.00" },
              { img: "images/9.png", title: "ลาเต้ร้อน", price: "60.00" },
              { img: "images/product-Cappuccino.png", title: "คาปูชิโน", price: "60.00" },
              { img: "images/8.png", title: "มัทฉะลาเต้", price: "60.00" },
              { img: "images/product-Tart Cherry.png", title: "ทาร์ตเชอรี่", price: "60.00" },
              { img: "images/product-Tart Cheese.png", title: "ชีสทาร์ต", price: "65.00" },
              { img: "images/product-Honey Lemon Soda.png", title: "น้ำผึ่งมะนาวโซดา", price: "45.00" },
              { img: "images/product-Strawberry Soda.png", title: "สตอเบอร์รี่โซดา", price: "45.00" },
            ].map((product, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card text-center shadow-sm border-0 h-100">
                  <img src={product.img} alt={product.title} className="card-img-top" style={{ maxHeight: '150px', objectFit: 'contain', padding: '1rem' }} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fs-6">{product.title}</h5>
                    <p className="text-dark fw-semibold">{product.price}</p>
                    <div className="d-flex gap-2 justify-content-center mt-auto">
                      <input type="number" defaultValue={1} className="form-control text-center quantity" style={{ width: '70px' }} />
                      <button className="btn btn-primary" onClick={() => handleAddMenu(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hero Sections */}
        <section style={{ backgroundImage: "url('images/cof.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }} className="d-flex align-items-center text-white">
          <div className="px-4">
            <h2 className="display-1 fw-bold" style={{ color: '#FFFFFF', fontSize: '3rem' }}>Grown with Care, Harvested with Heart,<br /> Brewed for You</h2>
            <p className="lead">Grown with Care, Harvested with Heart, Brewed for You" means carefully grown, <br />lovingly harvested, and expertly brewed just for you.</p>
          </div>
        </section>
      <section style={{ backgroundImage: "url('images/ni.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '10vh', margin: 0, padding: 0 }} className="d-flex align-items-center text-white">
  <div className="px-4">
    <h2 className="display-1 fw-bold" style={{ color: '#FFFFFF', fontSize: '3rem' }}>Savor the Flavor, Experience the Excellence,<br></br> Crafted for Every Sip</h2>
    <p className="lead">Our commitment to quality ensures every cup is crafted with passion and precision, <br></br> bringing you the finest coffee experience.</p>
  </div>
      </section>
      <section style={{ backgroundImage: "url('images/cof1.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh', margin: 0, padding: 0 }} className="d-flex align-items-center text-white">
  <div className="px-4">
    <h2 className="display-1 fw-bold" style={{ color: '#FFFFFF', fontSize: '3rem' }}>Savor the Flavor, Experience the Excellence,<br></br> Crafted for Every Sip</h2>
    <p className="lead">Our commitment to quality ensures every cup is crafted with passion and precision, <br></br> bringing you the finest coffee experience.</p>
  </div>
  </section>
    </div>
  </>
);

export default Home;
