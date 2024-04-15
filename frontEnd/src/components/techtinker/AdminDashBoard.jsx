// AdminDashBoard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/AdminDashBoard.css'; // Import CSS file for styling

const AdminDashBoard = () => {
  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
      </div>

      {/* Main Content */}
      <div className="main-content">
      <div>
      <div className="main-heading">
        <h1 >Welcome to Admin Dashboard</h1>
      </div>
      <div className='main-buuton'>
          <Link to="/admin_main">
            <button>Add Products</button>
          </Link>
          <Link to="/courseadd">
            <button>Add Courses</button>
          </Link>
          <Link to="/courseupdate">
            <button>Update Courses</button>
          </Link>
          <Link to="/studentmanagement">
            <button>Student List</button>
          </Link>
        </div>
      </div>
       
      </div>
    </div>
  );
}

export default AdminDashBoard;
