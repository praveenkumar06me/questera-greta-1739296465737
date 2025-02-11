import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl font-bold text-coffee-dark mb-4"
        >
          See You Soon!
        </motion.h2>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-gray-600"
        >
          "Thanks for stopping by. Your next coffee break awaits!"
        </motion.p>
      </div>
    </motion.div>
  );
}