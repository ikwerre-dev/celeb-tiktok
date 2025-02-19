import { motion } from 'framer-motion';
import { Home, Twitter, Instagram, BookOpen } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-center gap-8">
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2">
          <Home size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2">
          <Twitter size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2">
          <Instagram size={20} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2">
          <BookOpen size={20} />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Book a Call
        </motion.button>
      </div>
    </nav>
  );
}