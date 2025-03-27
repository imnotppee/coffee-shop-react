import React from 'react';

const OrderSummary = () => {
  return (
    <div className="bg-white rounded shadow p-3 h-100 d-flex flex-column">
      <h5 className="mb-3">Order Summary</h5>
      <table className="table table-sm table-borderless mb-0">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>08:02AM</td>
          </tr>
          <tr>
            <td>2</td>
            <td>08:30AM</td>
          </tr>
          <tr>
            <td>3</td>
            <td>08:45AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
