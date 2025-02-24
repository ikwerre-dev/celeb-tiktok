'use client';
import { motion } from 'framer-motion';
import { SiTiktok } from "react-icons/si";
import { Mail } from 'lucide-react';
 
const reviews = [
    {
        text: "Hey Deano!\n\nThe video is perfect! Thank you so much for your hard work on the video. The team loved it, and I have already approved payment. Would you be interested in creating a few more videos for us at the same rate? We're looking for similar-style"
    },
    {
        text: "Hi Deano,\n\nI'm also reaching out to let you know that your videos look like they're doing really well and based on this we would love for you to create some more videos for them this month if you are interested?"
    },
    {
        text: "Hi Deano,\n\nYour videos are so good! Thank you for sending these options, the team is very happy with all the content you have been producing! I will get your payment moved forward"
    },
    {
        text: "Hi Deano,\n\nWOW! We absolutely loved your video, amazing job!! This is the exact content we were looking forward to receiving and we really enjoyed the voiceover!"
    }
];
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-7xl mx-auto">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#f4f4f4] p-8   shadow-[9px_9px_10px_0px_rgba(178,190,181,1)]"
                        >
                            <p className="text-base md:text-lg font-medium whitespace-pre-line">
                                {review.text}
                            </p>
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