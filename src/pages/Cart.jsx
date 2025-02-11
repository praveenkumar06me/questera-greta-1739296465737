import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee-dark">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="mx-2 border rounded p-1"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <button
                onClick={() => alert('Checkout functionality coming soon!')}
                className="bg-coffee-light hover:bg-coffee-cream text-white px-6 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}