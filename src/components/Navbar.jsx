import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Importing the icon you want
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Optiflow</h1>
      </div>
      <div className="navbar-right">
        <div className="notification-icon">
          <FaBell />
          <span className="notification-badge">3</span> {/* Notification count */}
        </div>
        <div className="profile-icon">
          <FaUserCircle /> {/* Replacing the old profile icon with FaUserCircle */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
