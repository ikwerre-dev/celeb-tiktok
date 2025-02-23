'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StatsSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-8xl text-black font-black uppercase text-center mb-20"
                >
                   content that converts.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {[1, 2, 3,4].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="relative  ">
                                <Image
                                    src={`/tiktokstats${index}.png`}
                                    alt={`TikTok Statistics ${index}`}
                                    width={800}
                                    height={100}
                                     className="w-[50rem] "
                                />
                            </div>
                         </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mt-16"
                >
                    <p className="text-2xl text-gray-700 font-medium">
                        Consistently delivering high-performing content
                        <span className="block mt-2 text-pink-500">that drives real results.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}