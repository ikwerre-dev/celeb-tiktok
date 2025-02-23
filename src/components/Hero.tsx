'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="text-center pt-[8rem] pb-24">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mb-16"
            >
                <h5 className='text-[#ed0b76] font-bold text-6xl tracking-wider'>GIBRAN</h5>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[3.5rem] leading-tight font-black max-w-5xl mx-auto mb-16 text-black 
                          [text-shadow:_3px_3px_0_rgb(0_0_0_/_10%)] tracking-tight px-4"
            >
                The UGC Creator helping brands
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                    3-5x online sales within 90 days
                </span>
                using his UGC conversion formula.
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 justify-center"
            >
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium 
                             shadow-lg hover:shadow-xl transition-shadow"
                >
                    Examples
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 
                             rounded-full text-lg font-medium shadow-lg hover:shadow-xl 
                             transition-shadow"
                >
                    Email Me
                </motion.button>
            </motion.div>
        </section>
    );
}