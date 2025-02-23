'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CreatorImages() {
    return (
        <div className="relative h-[15rem] md:h-[500px] mt-12">
            

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-0 bottom-0 w-[15rem] md:w-[400px]"
            >
                <Image
                    src="/creator-1.png"
                    alt="Creator Image"
                    width={400}
                    height={500}
                    className="object-contain"
                />
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                 className="absolute right-0 bottom-0 w-[15rem] md:w-[400px]"

            >
                <Image
                    src="/creator-2.png"
                    alt="Creator Image"
                    width={400}
                    height={500}
                    className="object-contain"
                />
            </motion.div>
        </div>
    );
}