import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiLogOut, BiSearch } from 'react-icons/bi';

const AdminPanel = () => {
  const [menus, setMenus] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  // เรียกข้อมูลจาก backend (API)
  useEffect(() => {
    fetchMenus();
    fetchUsers();
    fetchOrders();
  }, []);

  const fetchMenus = async () => {
    const res = await fetch('http://localhost:4000/menus');
    const data = await res.json();
    setMenus(data);
  };

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:4000/users');
    const data = await res.json();
    setUsers(data);
  };

  const fetchOrders = async () => {
    const res = await fetch('http://localhost:4000/orders');
    const data = await res.json();
    setOrders(data);
  };

  return (
    <div className="admin-panel">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Admin Panel</h2>
        </div>
        <div className="navbar-menu">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/menus">Menus</Link>
          <button onClick={() => alert("Logout functionality")} className="logout-btn">
            <BiLogOut /> Logout
          </button>
        </div>
      </nav>

      <div className="admin-content">
        <h3>Dashboard</h3>
        <div className="dashboard-info">
          <div className="card">
            <h4>Total Menus</h4>
            <p>{menus.length}</p>
          </div>
          <div className="card">
            <h4>Total Users</h4>
            <p>{users.length}</p>
          </div>
          <div className="card">
            <h4>Total Orders</h4>
            <p>{orders.length}</p>
          </div>
        </div>

        <h3>Menus</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Menu Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu.menu_id}>
                <td>{menu.menu_name}</td>
                <td>{menu.menu_price}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Users</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Orders</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.user_id}</td>
                <td>{order.total_price}</td>
                <td>{order.order_status}</td>
                <td>
                  <button>View</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
