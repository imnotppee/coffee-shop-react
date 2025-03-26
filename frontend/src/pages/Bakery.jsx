import React from 'react';
import { Link } from 'react-router-dom';

const Bakery = () => (

    <div className="w-100 py-5 px-0" style={{ margin: 0 }}>
    <h2 className="text-center mb-4">Bakery</h2>
    <p className="text-center">รายการเบเกอรี่ของเรา</p>

    <section className="pb-5 w-100 px-4">
      <div className="row gx-4">
        {[
          { img: "images/product-thumb-1.png", title: "Whole Wheat Sandwich Bread", price: "$18.00" },
          { img: "images/product-thumb-2.png", title: "Croissant", price: "$12.00" },
          { img: "images/product-thumb-3.png", title: "Blueberry Muffin", price: "$8.00" },
          { img: "images/product-thumb-4.png", title: "Chocolate Cake", price: "$20.00" },
          { img: "images/product-thumb-5.png", title: "Cappuccino", price: "$6.50" },
          { img: "images/product-thumb-6.png", title: "Espresso", price: "$5.00" },
          { img: "images/product-thumb-7.png", title: "Latte", price: "$7.00" },
          { img: "images/product-thumb-8.png", title: "Iced Coffee", price: "$7.50" },
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
