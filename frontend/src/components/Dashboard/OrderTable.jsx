import React from 'react';

const OrderTable = () => {
    return (
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h2 className="text-sm font-semibold mb-3">Orders</h2>
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="text-left">
              <th>Order ID</th>
              <th>Order</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Gain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>เฟรนฟรายx1</td>
              <td>45฿</td>
              <td>30฿</td>
              <td>15฿</td>
            </tr>
            <tr>
              <td>2</td>
              <td>อเมริกาโน่เย็น/หวานน้อยx1</td>
              <td>50฿</td>
              <td>35฿</td>
              <td>15฿</td>
            </tr>
            <tr>
              <td>2</td>
              <td>มาการองx3</td>
              <td>150฿</td>
              <td>90฿</td>
              <td>60฿</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrderTable;