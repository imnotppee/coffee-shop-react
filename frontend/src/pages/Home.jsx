import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag, BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi';

const categoryLinks = [
  { label: 'Coffee/Tea', path: '/coffee-and-tea' },
  { label: 'Bakery', path: '/bakery' },
  { label: 'Snack', path: '/snack' },
  { label: 'Drinks', path: '/drinks' },
];

const Home = () => (
  <>
    <div className="bg-white">
    <section style={{ backgroundImage: "url('images/banner-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '70vh', margin: 0,padding: 0,}} className="d-flex align-items-center text-white">
      <div className="px-4">
        <h2 className="display-1 fw-bold" 
        style={{ color: '#FFFFFF' }}>Coffee & Bakery</h2>
        <p className="lead">Freshly brewed, freshly baked</p>
      </div>
    </section>

    <section className="py-5 px-4">
  <h2 className="section-title text-center mb-5">Categories</h2>
  <div className="row justify-content-center gap-4">
    {categoryLinks.map((cat, i) => (
      <div key={i} className="col-2 col-md-2 text-center">
        <Link to={cat.path} className="text-decoration-none text-dark">
          <img
            src={`images/category-${i + 1}.png`}
            className="rounded-circle img-fluid shadow-sm category-thumb"  // ใช้ .category-thumb
            alt={cat.label}
          />
          <h4 className="fs-6 mt-3 fw-normal">{cat.label}</h4>
        </Link>
      </div>
    ))}
  </div>
</section>



    <section className="pb-5 container-lg">
      <h2 className="section-title text-center my-4">Recommended Menu</h2>
      <div className="row">
        {[
          { img: "images/product-Whole Wheat Sandwich Bread.png", title: "ขนมปังโฮลวีทแซนด์วิช", price: "฿45.00" },
          { img: "images/product-Croissant.png", title: "ครัวซองต์", price: "฿80.00" },
          { img: "images/product-Blueberry Muffin.png", title: "บลูเบอร์รี่มัฟฟิน", price: "฿35.00" },
          { img: "images/product-Chocolate Cake.png", title: "เค้กช็อกโกแลต", price: "฿55.00" },
          { img: "images/product-Cappuccino.png", title: "คาปูชิโน", price: "฿45.00" },
          { img: "images/product-Espresso.png", title: "เอสเพรสโซ ", price: "฿45.00" },
          { img: "images/product-Latte.png", title: "ลาเต้", price: "฿45.00" },
          { img: "images/product-Iced Coffee.png", title: "ไอซ์คอฟฟี่", price: "฿45.00" },
        ].map((product, i) => (
          <div key={i} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center shadow-sm border-0 h-100">
              <img src={product.img} alt={product.title} className="card-img-top" style={{ maxHeight: '150px', objectFit: 'contain', padding: '1rem' }} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title fs-6">{product.title}</h5>
                <p className="text-dark fw-semibold">{product.price}</p>
                <div className="d-flex gap-2 justify-content-center mt-auto">
                  <input type="number" defaultValue={1} className="form-control text-center quantity" style={{ width: '70px' }} />
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  </>
);

export default Home;