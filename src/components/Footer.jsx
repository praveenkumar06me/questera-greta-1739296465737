import { FaInstagram, FaEnvelope, FaCoffee } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaCoffee className="mr-2" /> The Amigos
            </h3>
            <p className="text-sm">
              Serving the finest coffee with love and passion since 2024.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/menu" className="hover:text-coffee-cream transition">Menu</a></li>
              <li><a href="#/about" className="hover:text-coffee-cream transition">About Us</a></li>
              <li><a href="#/contact" className="hover:text-coffee-cream transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="mailto:Praveenkumar06me@gmail.com" className="hover:text-coffee-cream transition">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://instagram.com/praveenkrpatra" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-cream transition">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} The Amigos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}