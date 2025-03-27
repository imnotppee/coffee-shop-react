import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const categoryLinks = [
  { label: 'Coffee/Tea', path: '/coffee-and-tea' },
  { label: 'Bakery', path: '/bakery' },
  { label: 'Snack', path: '/snack' },
  { label: 'Drinks', path: '/drinks' },
];

const Home = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (location.state?.message) {
      setAlertMessage(location.state.message);
      setShowAlert(true);
      window.history.replaceState({}, document.title);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [location]);

  const handleAddToCartPopup = (product) => {
    addToCart(product);
    setAlertMessage(`เพิ่ม ${product.name} ลงในตะกร้าแล้ว`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const recommended = [
    { id: 1, name: "เอสเพรสโซ่บราวน์ชูการ์", img: "images/7.jpg", price: 60, type: "detail" },
    { id: 2, name: "ลาเต้ร้อน", img: "images/9.png", price: 60 },
    { id: 3, name: "คาปูชิโน", img: "images/product-Cappuccino.png", price: 60 },
    { id: 4, name: "มัทฉะลาเต้", img: "images/8.png", price: 60 },
    { id: 5, name: "ทาร์ตเชอรี่", img: "images/product-Tart Cherry.png", price: 60 },
    { id: 6, name: "ชีสทาร์ต", img: "images/product-Tart Cheese.png", price: 65 },
    { id: 7, name: "น้ำผึ้งมะนาวโซดา", img: "images/product-Honey Lemon Soda.png", price: 45 },
    { id: 8, name: "สตอเบอร์รี่โซดา", img: "images/product-Strawberry Soda.png", price: 45 },
  ];

  return (
    <div className="bg-white position-relative">
      {showAlert && (
        <div className="alert alert-success position-fixed top-0 end-0 m-4 shadow" style={{ zIndex: 9999 }}>
          {alertMessage}
        </div>
      )}

      {/* Banner Section */}
      <section className="d-flex align-items-center text-white" style={{
        backgroundImage: "url('images/banner-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh'
      }}>
        <div className="px-4">
          <h2 className="display-1 fw-bold text-white">Coffee & Bakery</h2>
          <p className="lead">Freshly brewed, freshly baked</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 container-fluid">
        <h2 className="text-center mb-5">Categories</h2>
        <div className="row justify-content-center gap-4">
          {categoryLinks.map((cat, i) => (
            <div key={i} className="col-auto text-center">
              <Link to={cat.path} className="text-decoration-none text-dark">
                <img src={`images/category-${i + 1}.png`} alt={cat.label} className="img-fluid shadow-sm" style={{
                  width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover'
                }} />
                <h4 className="fs-6 mt-3">{cat.label}</h4>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Menu */}
      <section className="pb-5 container-lg">
        <h2 className="text-center my-4">Recommended Menu</h2>
        <div className="row">
          {recommended.map((product, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card text-center shadow-sm border-0 h-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top"
                  style={{ maxHeight: '150px', objectFit: 'contain', padding: '1rem' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="fs-6">{product.name}</h5>
                  <p className="fw-semibold text-dark">฿{product.price}</p>
                  <div className="d-flex gap-2 justify-content-center mt-auto">
                    {product.type === 'detail' ? (
                      <Link to="/product-detail" state={product} className="custom-brown-btn">
                        ใส่ตะกร้า
                      </Link>
                    ) : (
                      <button className="custom-brown-btn" onClick={() => handleAddToCartPopup(product)}>
                        ใส่ตะกร้า
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Banners */}
      <section className="d-flex align-items-center text-white" style={{
        backgroundImage: "url('images/cof.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh'
      }}>
        <div className="px-4">
          <h2 className="display-1 fw-bold text-white" style={{ fontSize: '3rem' }}>
            Grown with Care, Harvested with Heart,<br /> Brewed for You
          </h2>
          <p className="lead">
            Grown with Care, Harvested with Heart, Brewed for You means carefully grown,<br />
            lovingly harvested, and expertly brewed just for you.
          </p>
        </div>
      </section>

      <section className="d-flex align-items-center text-white" style={{
        backgroundImage: "url('images/cof1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        marginTop: '50px'
      }}>
        <div className="px-4">
          <h2 className="display-1 fw-bold text-white" style={{ fontSize: '3rem' }}>
            Savor the Flavor, Experience the Excellence,<br /> Crafted for Every Sip
          </h2>
          <p className="lead">
            Our commitment to quality ensures every cup is crafted with passion and precision,<br />
            bringing you the finest coffee experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
