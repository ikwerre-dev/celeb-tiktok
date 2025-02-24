'use client';
import { motion } from 'framer-motion';
import { SiTiktok } from "react-icons/si";
import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function ReviewsSection() {
    return (
        <section className="py-24 px-4  ">
            <div className="  mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-8xl text-black font-black text-center mb-20"
                >
                    CLIENT REVIEWS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2   mb-16">
                    {Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                         >
                            <Image
                                src={`/reviews/1.png`}
                                alt={`Client Review ${index}`}
                                width={700}
                                height={100}
                                className="object-contain rounded-3xl"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    <motion.a
                        href="https://www.tiktok.com/@deanbartlett233?_t=ZN-8u9s6rmeHg6&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white rounded-full"
                    >
                        <SiTiktok className="w-6 h-6 text-black" />
                    </motion.a>
                    <motion.a
                        href="mailto:deano@dbinnovations.com"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                    >
                        <Mail className="w-6 h-6 text-white" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}