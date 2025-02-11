import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
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
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <a
                href="mailto:Praveenkumar06me@gmail.com"
                className="flex items-center text-gray-600 hover:text-coffee-light transition"
              >
                <FaEnvelope className="mr-3" />
                Praveenkumar06me@gmail.com
              </a>
              
              <a
                href="https://instagram.com/praveenkrpatra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-coffee-light transition"
              >
                <FaInstagram className="mr-3" />
                @praveenkrpatra
              </a>
              
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3" />
                +1 (555) 123-4567
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3" />
                123 Coffee Street, Brewville, CA 90210
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-coffee-light"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-coffee-light"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-coffee-light"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-coffee-light hover:bg-coffee-cream text-white py-2 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}