import React from 'react';
import { FaTachometerAlt, FaCoffee, FaClipboardList, FaBoxOpen, FaUsers } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // เปลี่ยน path ตามที่คุณเก็บไฟล์

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
        <a className="nav-link py-3 px-0 text-dark" href="#" title="Dashboard">
          <FaTachometerAlt size={20} />
        </a>
        <a className="nav-link py-3 px-0 text-dark" href="#" title="Menu Management">
          <FaCoffee size={20} />
        </a>
        <a className="nav-link py-3 px-0 text-dark" href="#" title="Order Management">
          <FaClipboardList size={20} />
        </a>
        <a className="nav-link py-3 px-0 text-dark" href="#" title="Stock">
          <FaBoxOpen size={20} />
        </a>
        <a className="nav-link py-3 px-0 text-dark" href="#" title="Customer">
          <FaUsers size={20} />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
