import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { cart } = useCart();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-coffee-dark text-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="text-2xl" />
            <span className="text-xl font-bold">The Amigos</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-coffee-cream transition">Home</Link>
            <Link to="/menu" className="hover:text-coffee-cream transition">Menu</Link>
            <Link to="/about" className="hover:text-coffee-cream transition">About</Link>
            <Link to="/contact" className="hover:text-coffee-cream transition">Contact</Link>
            <Link to="/cart" className="relative hover:text-coffee-cream transition">
              <FaShoppingCart className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <Link to="/logout" className="hover:text-coffee-cream transition flex items-center">
                <FaUser className="mr-1" /> Logout
              </Link>
            ) : (
              <Link to="/login" className="hover:text-coffee-cream transition flex items-center">
                <FaUser className="mr-1" /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}