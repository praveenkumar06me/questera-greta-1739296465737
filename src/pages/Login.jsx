import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in a real app, you'd want to add proper authentication
    if (email && password) {
      login({ email });
      navigate('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-coffee-dark mb-8">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            "Life begins after coffee. Let's get you logged in!"
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-coffee-light"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-coffee-light"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-coffee-light hover:bg-coffee-cream text-white py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}