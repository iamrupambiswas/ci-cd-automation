import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/user/me')
      .then((res) => setUser(res.data))
      .catch(() => {
        toast.error('Session expired. Please login again.');
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.info('Logged out');
    navigate('/login');
  };

  if (!user)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 text-lg font-medium">Fetching dashboard data...</p>
        </div>
      </div>
    );


  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-gray-300 pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">
            👋 Welcome, {user.username}
          </h1>
          <p className="text-gray-700 text-lg mt-2">Role: {user.role}</p>
          <p className="text-gray-700 text-sm">Email: {user.email}</p>
        </div>

        <div className="flex gap-4">
          {user.role === 'ADMIN' && (
            <button
              onClick={() => navigate('/admin/register-dev')}
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-300"
            >
              ➕ Register Developer
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-300"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Webhook Events */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🧾 Webhook Events
        </h2>
        <div className="border-2 border-dashed border-blue-400 bg-white rounded-lg p-8 text-gray-500 italic shadow">
          Phase 3 will display push events from GitHub here.
        </div>
      </div>
    </div>
  );
}
