import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeAndTea = () => (
  <div className="w-100 py-5 px-0" style={{ margin: 0 }}>
  <h2 className="text-center mb-4">Coffee/Tea</h2>
  <p className="text-center">รายการเครื่องดื่ม</p>

  <section className="pb-5 w-100 px-4">
    <div className="row gx-4">
      {[
        { img: "images/1.jpg", title: "โก้โก้", price: "฿40.00" },
        { img: "images/2.jpg", title: "ลาเต้เย็น", price: "฿40.00" },
        { img: "images/3.jpg", title: "ชานม", price: "฿40.00" },
        { img: "images/4.jpg", title: "อเมริกาโน่เย็น", price: "฿50.00" },
        { img: "images/5.jpg", title: "คาปูชิโน่เย็น", price: "฿50.00" },
        { img: "images/6.jpg", title: "อเมริกาโน่ส้ม", price: "฿60.00" },
        { img: "images/7.jpg", title: "เอสเพรสโซ่บราวน์ชูการ์", price: "฿60.00" },
        { img: "images/8.png", title: "มัทฉะลาเต้", price: "฿60.00" },
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

export default CoffeeAndTea;
