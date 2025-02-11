import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-coffee-dark"
        >
          About The Amigos
        </motion.h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Cafe interior"
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded by John, The Amigos began as a simple dream to create a space where coffee lovers could find their perfect cup. What started as a small coffee cart in 2020 has grown into a beloved community hub where quality coffee meets warm hospitality.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-gray-600 mb-6">
              At The Amigos, we believe that every cup of coffee tells a story. We source our beans directly from sustainable farms, ensuring both quality and ethical practices. Our baristas are trained to perfection, treating coffee-making as both an art and a science.
            </p>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">Meet Our Founder</h3>
              <p className="text-gray-600">
                John's passion for coffee began during his travels across South America. His vision was to bring the authentic coffee experience to our community, combined with a warm, welcoming atmosphere where everyone feels like family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}