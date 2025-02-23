'use client';
import { motion } from 'framer-motion';
import { SiTiktok } from "react-icons/si";
import { Mail } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-6xl md:text-8xl font-black mb-8"
                >
                    LET&lsquo;S GET TO WORK!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl md:text-4xl text-pink-500 font-medium mb-12"
                >
                    Send me an email me & we can discuss the next steps!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <motion.a
                        href="mailto:contact@example.com"
                        whileHover={{ scale: 1.05 }}
                        className="px-12 py-4 bg-black text-white rounded-full text-xl font-medium"
                    >
                        Email Me
                    </motion.a>
                </motion.div>

                <div className="flex justify-center gap-6 mt-12">
                    <motion.a
                        href="https://tiktok.com/@username"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-black rounded-full"
                    >
                        <SiTiktok className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                        href="mailto:contact@example.com"
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