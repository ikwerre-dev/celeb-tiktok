'use client';
import { motion } from 'framer-motion'; 

export default function ServicesSection() {
    const services = [
        "Organically on your brands social media accounts.",
        "As paid ads that your brand can run campaigns with.",
        "Whitelisted on my TikTok or Instagram account, @deanbartlett233."
    ];

    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-6xl md:text-8xl font-black text-center mb-16"
                >
                    SERVICES
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl md:text-4xl text-center mb-16 max-w-4xl mx-auto"
                >
                    As you know, UGC videos can be utilized in a variety of ways. The content I create can be used in the following ways...
                </motion.p>

                <div className="space-y-8 max-w-4xl mx-auto mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-3xl md:text-4xl font-bold">{index + 1}.</span>
                            <p className="text-xl md:text-2xl">{service}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}