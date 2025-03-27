import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SalesOverview from '../components/Dashboard/SalesOverview';
import YearlyBreakup from '../components/Dashboard/YearlyBreakup';
import MonthlyEarnings from '../components/Dashboard/MonthlyEarnings';
import OrderSummary from '../components/Dashboard/OrderSummary';
import OrderTable from '../components/Dashboard/OrderTable';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <SalesOverview />
          <YearlyBreakup />
          <MonthlyEarnings />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <OrderSummary />
          <OrderTable />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;