import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: 3.99,
    description: "Rich and bold single shot of espresso",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.99,
    description: "Perfect balance of espresso, steamed milk, and foam",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Latte",
    price: 4.49,
    description: "Smooth espresso with steamed milk and light foam",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  // Add more menu items as needed
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee-dark">Our Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-coffee-dark">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                  className="bg-coffee-light hover:bg-coffee-cream text-white px-4 py-2 rounded-full transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}