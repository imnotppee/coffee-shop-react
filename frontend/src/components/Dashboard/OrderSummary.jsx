import React from 'react';

const OrderSummary = () => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm font-semibold mb-3">Order Summary</h2>
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="text-left">
              <th>Order ID</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>08:02AM</td></tr>
            <tr><td>2</td><td>08:30AM</td></tr>
            <tr><td>3</td><td>08:45AM</td></tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrderSummary;
  