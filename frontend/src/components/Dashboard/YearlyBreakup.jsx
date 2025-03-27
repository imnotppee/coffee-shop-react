import React from 'react';

const YearlyBreakup = () => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm font-semibold mb-2">Yearly Breakup</h2>
        <div className="text-xl font-bold">$36,358</div>
        <div className="text-sm text-green-500">+9% last year</div>
        {/* วงกลมกราฟสามารถใช้ไลบรารีหรือแค่ placeholder ไปก่อน */}
        <div className="mt-3">
          <div className="w-20 h-20 rounded-full border-4 border-blue-400 border-t-transparent animate-spin mx-auto"></div>
        </div>
      </div>
    );
  };
  
  export default YearlyBreakup;
  