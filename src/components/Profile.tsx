import { motion } from 'framer-motion';
import Image from 'next/image';
import CallToAction from '@/components/CallToAction';

export default function Profile() {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 mx-auto relative rounded-full overflow-hidden"
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold">Hey, I&lsquo;m Mia Carter.</h1>
        <h2 className="text-3xl font-bold">Dreamer & Designer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Crafting seamless experiences and bold visuals. High school student by day, 
          creative thinker, and aspiring innovator by night.
        </p>
      </motion.div>

      <CallToAction />
    </div>
  );
}