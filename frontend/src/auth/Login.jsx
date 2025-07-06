import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';
import { toast } from 'react-toastify';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      onLogin?.(res.data.token);
      navigate('/dashboard');
    } catch (err) {
        toast.error('Invalid credentials');
        console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Sign In</h1>
          <p className="text-gray-500 text-sm">Welcome back! Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-md font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                >
                Login
            </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 underline hover:text-blue-800">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
