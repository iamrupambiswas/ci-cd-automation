import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RegisterDev from './admin/RegisterDev';
import ProtectedRoute from './utils/ProtectedRoute';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const listener = () => setToken(localStorage.getItem('token'));
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login onLogin={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/admin/register-dev"
          element={token ? <RegisterDev /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/register-dev"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <RegisterDev />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
