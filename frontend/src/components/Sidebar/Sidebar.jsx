import React from 'react';
import { FaTachometerAlt, FaCoffee, FaClipboardList, FaBoxOpen, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <div
      className="bg-white border-end d-flex flex-column align-items-center py-3"
      style={{
        width: '80px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1040,
      }}
    >
      {/* โลโก้เล็ก */}
      <div className="mb-4">
        <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} />
      </div>

      {/* เมนูไอคอนแนวตั้ง */}
      <nav className="nav flex-column text-center w-100">
        <Link to="/dashboardpage" className="nav-link py-3 px-0 text-dark" title="Dashboard">
          <FaTachometerAlt size={20} />
        </Link>
        <Link to="/menumanagement" className="nav-link py-3 px-0 text-dark" title="Menu Management">
          <FaCoffee size={20} />
        </Link>
        <Link to="/ordermanagement" className="nav-link py-3 px-0 text-dark" title="Order Management">
          <FaClipboardList size={20} />
        </Link>
        <Link to="/stock" className="nav-link py-3 px-0 text-dark" title="Stock">
          <FaBoxOpen size={20} />
        </Link>
        <Link to="/customer" className="nav-link py-3 px-0 text-dark" title="Customer">
          <FaUsers size={20} />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
