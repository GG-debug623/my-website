import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaShoppingCart, 
  FaCogs, 
  FaChartLine, 
  FaSignOutAlt, 
  FaCalendarAlt,
  FaPlusCircle 
} from "react-icons/fa"; // Importing icons
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/ahmed">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/order-management">
            <FaPlusCircle /> Order Management
          </Link>
        </li>
        <li>
          <Link to="/planning">
            <FaCalendarAlt /> Planning
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <FaChartLine /> Reports
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCogs /> Settings
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
