import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PortfolioGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
    >
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          whileHover={{ y: -10 }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={`/project-${item}.jpg`}
            alt={`Project ${item}`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}