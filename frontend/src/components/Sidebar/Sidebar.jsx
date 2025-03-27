import { FaTachometerAlt, FaCoffee, FaBoxOpen, FaClipboardList, FaUsers } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow h-screen flex flex-col">
      <div className="p-4 flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
        <h1 className="text-xl font-bold">LEAFF</h1>
      </div>
      <nav className="mt-4 flex-1">
        <ul>
          <li className="p-3 flex items-center bg-beige-200 rounded">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          <li className="p-3 flex items-center">
            <FaCoffee className="mr-2" /> Menu Management
          </li>
          <li className="p-3 flex items-center">
            <FaClipboardList className="mr-2" /> Order Management
          </li>
          <li className="p-3 flex items-center">
            <FaBoxOpen className="mr-2" /> Stock
          </li>
          <li className="p-3 flex items-center">
            <FaUsers className="mr-2" /> Customer
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;