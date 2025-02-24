'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandsSection() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-7xl text-black font-black text-center mb-20"
                >
                    TRUSTED BY 50+ BRANDS...
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {Array.from({ length: 16 }, (_, i) => i + 1).map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[3/2] flex items-center justify-center"
                        >
                            <Image
                                src={`/brands/${index}.png`}
                                alt={`Brand Partner ${index}`}
                                width={200}
                                height={100}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}