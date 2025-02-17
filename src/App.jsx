import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import Planning from './pages/Planning';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Magasin from './pages/magasin'; 
import AuthPage from './components/AuthPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-management" element={<OrderManagement />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/magasin" element={<Magasin />} />  {/* Add route for Magasin */}
            <Route path="/logout" element={<Logout />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
