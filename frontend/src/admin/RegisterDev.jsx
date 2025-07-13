import { useState } from 'react';
import axios from '../api/axiosInstance';
import { toast } from 'react-toastify';

export default function RegisterDev() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/admin/register-dev', {
        email,
        username,
        password,
      });
      toast.success('Developer registered successfully');
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (err) {
      toast.error('Failed to register developer');
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
          ➕ Register New Developer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
          >
            🚀 Register Developer
          </button>
        </form>
      </div>
    </div>
  );
}
