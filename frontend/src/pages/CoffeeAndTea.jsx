import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeAndTea = () => (
  <div className="w-100 py-5 m-0">
    <h2 className="text-center mb-4">Coffee & Tea</h2>
    <p className="text-center mb-5">รายการกาแฟ ชา และเครื่องดื่มร้อน-เย็นของเรา</p>

    <section className="container-fluid">
      <div className="row gx-3 gy-4 justify-content-center mx-0">
        {[
          { slug: "cappuccino", img: "images/product-thumb-5.png", title: "Cappuccino", price: "$6.50" },
          { slug: "espresso", img: "images/product-thumb-6.png", title: "Espresso", price: "$5.00" },
          { slug: "latte", img: "images/product-thumb-7.png", title: "Latte", price: "$7.00" },
          { slug: "iced-coffee", img: "images/product-thumb-9.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-10.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-11.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-12.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-13.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-14.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-15.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-16.png", title: "Iced Coffee", price: "$7.50" },
          { slug: "iced-coffee", img: "images/product-thumb-17.png", title: "Iced Coffee", price: "$7.50" },
        ].map((product, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
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
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default CoffeeAndTea;
