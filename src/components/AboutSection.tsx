'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { SiTiktok } from "react-icons/si";

export default function AboutSection() {
    const facts = [
        "Based in Washington, I can create outdoor content all year round",
        "I have a baby boy who does great in UGC videos with me",
        "My wife & I specialize in creating `couples` UGC videos",
        "I am always open to work with any brand, regardless of niche",
        "I can create my own video concepts or I am always happy to follow a brands vision!"
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Left side - Phone with creator image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative w-full max-w-[400px] aspect-[9/16]"
                    >
                        <div className="absolute inset-0 rounded-[3rem] border-8 border-black bg-black overflow-hidden">
                            <div className="absolute w-full flex justify-center items-center top-3 z-10">
                                <div className="w-[6rem] h-[1.5rem] rounded-full bg-black"></div>
                            </div>
                            <Image
                                src="/creator.jpg"
                                alt="Creator"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - About content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl md:text-7xl font-black mb-8"
                        >
                            ABOUT THE CREATOR
                        </motion.h2>
                        
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-2xl md:text-3xl font-bold mb-8"
                        >
                            5 USEFUL THINGS TO KNOW ABOUT ME
                        </motion.h3>

                        <div className="space-y-4">
                            {facts.map((fact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="font-bold text-xl">{index + 1}.</span>
                                    <p className="text-xl">{fact}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">
                            <motion.a
                                href="https://www.tiktok.com/@deanbartlett233?_t=ZN-8u9s6rmeHg6&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="p-3 bg-black rounded-full"
                            >
                                <SiTiktok className="w-6 h-6 text-white" />
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
                </div>
            </div>
        </section>
    );
}