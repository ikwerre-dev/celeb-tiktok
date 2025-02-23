'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Home', 'Examples 1/2', 'Examples 2/2', 'Metrics', 
    'Partnerships', 'About the Creator', 'Client Reviews', 
    'Services', 'Contact'
  ];

  return (
    <header className="w-full py-4 border-b-2 border-black bg-white fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-between items-center text-sm">
          {menuItems.map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-black font-bold text-lg hover:text-pink-500 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-0 top-[60px] bg-white shadow-lg lg:hidden"
            >
              <ul className="py-4 px-6 space-y-4">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block text-gray-700 hover:text-pink-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}