import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext'; // Import your AuthProvider from the correct path
import Sidenav from './components/sidenav/Sidenav';
import TopNavbar from './components/topnav/Topnav';
import Layout from './layout/Layout';
import Dashboard from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
const App=()=>{
  const [dynamicRole, setDynamicRole] = useState('');
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={<Dashboard role={dynamicRole} />}
            />
            <Route path="*" element={<Navigate to={'/login'} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;



