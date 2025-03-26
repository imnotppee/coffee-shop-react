import React from 'react';

const Snack = () => (
    <div className="w-100 py-5 px-0" style={{ margin: 0 }}>
    <h2 className="text-center mb-4">Snack</h2>
    <p className="text-center">รายการอาหารว่าง</p>

    <section className="pb-5 w-100 px-4">
      <div className="row gx-4">
        {[
          { img: "images/product-Spring Rolls.png", title: "ปอเปี๊ยะทอด", price: "฿60.00" },
          { img: "images/product-Sandwich.png", title: "แซนด์วิช", price: "฿40.00" },
          { img: "images/product-French Fries.png", title: "เฟรนฟราย", price: "฿50.00" },

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

export default Snack;
