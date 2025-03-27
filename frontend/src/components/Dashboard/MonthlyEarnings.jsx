import React from 'react';

const MonthlyEarnings = () => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm font-semibold mb-2">Monthly Earnings</h2>
        <div className="text-xl font-bold">$6,820</div>
        <div className="text-sm text-red-500">-9% last year</div>
        <div className="mt-3">
          {/* จำลองกราฟเส้น */}
          <div className="w-full h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default MonthlyEarnings;
  