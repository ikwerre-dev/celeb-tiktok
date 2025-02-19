import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex gap-4 justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-black text-white px-6 py-3 rounded-full"
      >
        Book a Call
      </motion.button>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-100 text-green-800"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Available for new project
      </motion.div>
    </motion.div>
  );
}