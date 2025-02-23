'use client';
import { motion } from 'framer-motion';
import { Mail, PauseCircle, PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { SiTiktok } from "react-icons/si";

const videoData = [
    { id: 1, src: '/videos/1.mp4', title: 'Money Hack' },
    { id: 2, src: '/videos/1.mp4', title: 'Bank Tips' },
    { id: 3, src: '/videos/1.mp4', title: 'Side Hustle' },
    { id: 4, src: '/videos/1.mp4', title: 'Easy Money' },
];

export default function VideoExamples() {
    const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({});
    const [thumbnails, setThumbnails] = useState<{ [key: number]: string }>({});
    const togglePlay = (videoId: number, videoElement: HTMLVideoElement) => {
        if (videoElement.paused) {
            videoElement.play();
            setPlayingStates(prev => ({ ...prev, [videoId]: true }));
        } else {
            videoElement.pause();
            setPlayingStates(prev => ({ ...prev, [videoId]: false }));
        }
    }
    const generateThumbnail = async (video: HTMLVideoElement, videoId: number) => {
        try {
            video.currentTime = 1; // Set to 1 second
            await new Promise((resolve) => {
                video.addEventListener('seeked', () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const thumbnail = canvas.toDataURL('image/jpeg');
                    setThumbnails(prev => ({ ...prev, [videoId]: thumbnail }));
                    resolve(true);
                }, { once: true });
            });
        } catch (error) {
            console.error('Error generating thumbnail:', error);
        }
    };


    return (
        <section className="py-24 px-4">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl text-black font-black text-center mb-16"
            >
                EXAMPLE VIDEOS
            </motion.h2>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {videoData.map((video) => (
                    <motion.div key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-[8/16]"
                    >
                        <div className="absolute inset-0 rounded-[3rem] border-8 border-black bg-black overflow-hidden">

                            <div className="absolute w-full flex justify-center items-center top-3 z-10 ">
                                <div className=" w-[6rem] h-[1.5rem] rounded-full  bg-black"></div>

                            </div>
                            <video
                                className="w-full h-[35rem] object-cover scale-[2]"
                                poster={thumbnails[video.id]}
                                playsInline

                                loop
                                muted
                                preload="metadata"
                                onLoadedMetadata={(e) => generateThumbnail(e.currentTarget, video.id)}
                                onPlay={() => setPlayingStates(prev => ({ ...prev, [video.id]: true }))}
                                onPause={() => setPlayingStates(prev => ({ ...prev, [video.id]: false }))}
                            >
                                <source src={video.src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center"
                                    onClick={(e) => {
                                        const video = e.currentTarget.parentElement?.parentElement?.querySelector('video');
                                        if (video) togglePlay(Number(video.id), video);
                                    }}
                                >
                                    {playingStates[video.id] ?
                                        <PauseCircle className="w-8 h-8 text-white" /> :
                                        <PlayCircleIcon className="w-8 h-8 text-white" />
                                    }
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-16">
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
        </section>
    );
}