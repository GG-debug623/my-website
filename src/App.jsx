import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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

function AppContent() {
  const location = useLocation();
  
  // Hide Navbar & Sidebar only on the auth page
  const isAuthPage = location.pathname === "/auth" || location.pathname === "/";

  return (
    <div className="app">
      {/* Only show Navbar and Sidebar when not on the Auth page */}
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />}
      
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/magasin" element={<Magasin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* Default route now points to AuthPage */}
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
