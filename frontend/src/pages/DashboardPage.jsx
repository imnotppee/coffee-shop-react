import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SalesOverview from '../components/Dashboard/SalesOverview';
import YearlyBreakup from '../components/Dashboard/YearlyBreakup';
import MonthlyEarnings from '../components/Dashboard/MonthlyEarnings';
import OrderSummary from '../components/Dashboard/OrderSummary';
import OrderTable from '../components/Dashboard/OrderTable';

const DashboardPage = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 bg-light p-4" style={{ marginLeft: '80px' }}>
        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center bg-white rounded p-3 mb-4 shadow-sm">
          <div className="d-flex align-items-center">
            <i className="bi bi-bell me-2"></i>
            <span className="fw-bold">+ 45฿</span>
          </div>
          <i className="bi bi-person-circle fs-4"></i>
        </div>

        <div className="row mb-4">
  {/* Left: Chart */}
  <div className="col-md-8">
    <div className="h-100">
      <SalesOverview />
    </div>
  </div>

    {/* Right: Yearly + Monthly (stacked vertically) */}
    <div className="col-md-4">
      <div className="d-flex flex-column h-100" style={{ minHeight: '420px' }}>
        <div className="flex-grow-1 mb-3">
          <YearlyBreakup />
        </div>
        <div className="flex-grow-1">
          <MonthlyEarnings />
        </div>
      </div>
    </div>
  </div>
        {/* Bottom: Order Summary + Table side-by-side */}
        <div className="row">
          <div className="col-md-4">
            <OrderSummary />
          </div>
          <div className="col-md-8">
            <OrderTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;