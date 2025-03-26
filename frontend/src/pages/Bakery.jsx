import React from 'react';
import { Link } from 'react-router-dom';

const Bakery = () => (

    <div className="w-100 py-5 px-0" style={{ margin: 0 }}>
    <h2 className="text-center mb-4">Bakery</h2>
    <p className="text-center">รายการเบเกอรี่ของเรา</p>

    <section className="pb-5 w-100 px-4">
      <div className="row gx-4">
        {[
          { img: "images/product-Whole Wheat Sandwich Bread.png", title: "ขนมปังโฮลวีทแซนด์วิช", price: "฿45.00" },
          { img: "images/product-Croissant.png", title: "ครัวซองต์", price: "฿80.00" },
          { img: "images/product-Blueberry Muffin.png", title: "บลูเบอร์รี่มัฟฟิน", price: "฿45.00" },
          { img: "images/product-Chocolate Cake.png", title: "เค้กช็อกโกแลต", price: "฿55.00" },
          { img: "images/product-Pancake.png", title: "แพนเค้ก", price: "฿40.00" },
          { img: "images/product-Macaron.png", title: "มาการอง", price: "฿50.00" },
          { img: "images/product-Tart Cherry.png", title: "ทาร์ตเชอรี่", price: "฿60.00" },
          { img: "images/product-Tart Cheese.png", title: "ชีสทาร์ต", price: "฿65.00" },
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
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Bakery;
